import { fastify } from "fastify";
import { github } from './github.js';

const server = fastify()

server.get('/', () => {
    const git = new github()
    let returnJSON = {}

    let repositorys = git.getRepos()
    console.log(repositorys);
    returnJSON.repositorio0 = repositorys[0];
    returnJSON.repositorio1 = repositorys[1];
    returnJSON.repositorio2 = repositorys[2];
    returnJSON.repositorio3 = repositorys[3];
    returnJSON.repositorio4 = repositorys[4];
    
    return returnJSON;
})

server.listen({
    port: 5000
})