import { fastify } from "fastify";

server.get('/', () => {
    return 'Hello World'
})

const server = fastify()
server.listen({
    port: 5000
})