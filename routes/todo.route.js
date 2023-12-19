const routes = async (app, _options) => {
  const collection = app.mongo.db.collection("test_collection");
  app.get("/", async (_request, reply) => {
    const getall = await collection.find().toArray();
    if (getall.length === 0) {
      return reply.send({ MSG: "NO Todo found" }).toArray();
    }
    reply.send({ hello: getall });
  });
};

export default routes;
