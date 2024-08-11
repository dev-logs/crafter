import type { ConnectRouter } from "@connectrpc/connect";
import { CrafterRequest, CrafterResponse, CrafterService } from "@devlog/schema-ts";

export default (router: ConnectRouter) =>
  router.service(CrafterService, {
    generate_welcome_email
  })

async function generate_welcome_email(req: CrafterRequest): Promise<CrafterResponse> {
  return new CrafterResponse()
}
