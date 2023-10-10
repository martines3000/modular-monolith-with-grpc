import { ConnectRouter } from "@connectrpc/connect";

import { AService } from "../../gen/a_connect.js";

export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(AService, {
    // implements rpc Say
    async say(req) {
      console.log(req);
      return {
        sentence: `You said: ${req.sentence}`,
      };
    },
  });
