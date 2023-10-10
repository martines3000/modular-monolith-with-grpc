import { ConnectRouter } from "@connectrpc/connect";

import say from "./routes-proto/say.js";
import { BService } from "../../gen/b_connect.js";

export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(BService, {
    // implements rpc Say
    say,
  });
