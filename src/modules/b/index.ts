import autoload from "@fastify/autoload";
import { join } from "desm";
import { FastifyInstance } from "fastify";

export default async function b(app: FastifyInstance, opts: any) {
  app.register(autoload, {
    dir: join(import.meta.url, "routes"),
    options: {
      prefix: opts.prefix,
    },
  });
}
