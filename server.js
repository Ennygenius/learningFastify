import Fastify from "fastify";
import todoRoute from "./routes/todo.route.js";
import dbConnect from "./Utils/db.connect.js";

const app = Fastify({
  logger: true,
});

app.register(dbConnect);

app.register(todoRoute, { prefix: "/api/v1/todo" });

app.all("*", (request, reply) => {
  reply.status(404).send({
    status: 404,
    Message: "Route not found",
  });
});

const startServer = async () => {
  try {
    await app.listen({ port: 2000 });
    console.log(`Server is now listening on ${app.server.address().port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
