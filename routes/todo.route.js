import Todo from "../models/todo.model.js";

const router = async (app, _options) => {
  app.get("/", async (_request, reply) => {
    const getall = await Todo.find();
    if (getall.length === 0) {
      return reply.send({ MSG: "NO Todo found" }).toArray();
    }
    reply.send({ Todo: getall });
  });
  app.get("/:id", async (request, reply) => {
    const { id } = request.params;
    try {
      const todo = await Todo.findById(id);
      reply.send({ Todo: todo });
    } catch (error) {
      console.log(error);
    }
  });
  app.post("/", async (request, reply) => {
    const { title, body } = request.body;
    try {
      const todo = await Todo.create({ title, body });
      reply.send({ todo });
    } catch (error) {
      console.log(error);
    }
  });
  app.patch("/:id", async (request, reply) => {
    const { title, body } = request.body;
    const { id } = request.params;

    try {
      const todo = await Todo.findByIdAndUpdate(id, { title, body });
      reply.send({ todo });
    } catch (error) {
      console.log(error);
    }
  });
  app.delete("/:id", async (request, reply) => {
    const { id } = request.params;
    const todo = await Todo.findByIdAndDelete(id);
    reply.send({ todo });
  });
};

export default router;
