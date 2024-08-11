import { fastify } from "fastify"
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify"
import routes from "./connect"
import { PORT } from "./config"

export default async function main() {
  const server = fastify()
  await server.register(fastifyConnectPlugin, {
    routes,
  })

  await server.listen({ host: "localhost", port: PORT })
  console.log("server is listening at", server.addresses())
}
