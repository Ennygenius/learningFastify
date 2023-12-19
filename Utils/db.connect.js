// import fastifyPlugin from "fastify-plugin";
// import fastifyMongo from "@fastify/mongodb";

// const dbConnector = async (app, _options) => {
//   app.register(
//     fastifyMongo,
//     {
//       url: "mongodb://0.0.0.0:27017/test_database",
//     },
//     console.log("Database connected")
//   );
// };

// export default fastifyPlugin(dbConnector);

import mongoose from "mongoose";

const URI = "mongodb://0.0.0.0:27017/test_database";
const dbConnector = async (request, reply) => {
  try {
    await mongoose.connect(URI);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnector;
