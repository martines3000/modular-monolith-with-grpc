import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, opts: any) {
  console.log(opts);
  fastify.get("/test", async (request, reply) => {
    return { hello: "from module b route test" };
  });
}
