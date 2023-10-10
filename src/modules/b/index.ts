import autoload from "@fastify/autoload";
import { join } from "desm";
import { FastifyInstance } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect.js";

export default async function b(app: FastifyInstance, opts: any) {
  /**
   * REST
   */
  await app.register(autoload, {
    dir: join(import.meta.url, "routes"),
    options: {
      prefix: opts.prefix,
    },
  });

  /**
   * gRPC
   */
  await app.register(fastifyConnectPlugin, {
    routes,
    prefix: opts.prefix,
  });
}
