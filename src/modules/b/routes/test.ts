import { AService } from "../../../gen/a_connect.js";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { FastifyInstance } from "fastify";

export default async function (fastify: FastifyInstance, opts: any) {
  const transport = createConnectTransport({
    baseUrl: "http://127.0.0.1:3000/a",
    httpVersion: "1.1",
  });

  const client = createPromiseClient(AService, transport);

  fastify.get("/test", async (request, reply) => {
    const res = await client.say({ sentence: "I feel happy." });
    return res.toJson();
  });
}
