import { SayRequest, SayResponse } from "../../../gen/b_pb.js";

export default async function say(req: SayRequest): Promise<SayResponse> {
  console.log(req);

  return new SayResponse({
    sentence: `You said: ${req.sentence}`,
  });
}
