////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// Author: Luciano Soares
//
//
// Purpose: This program was developer for Take Blip. This is an API to connect Blip Whats app to github page and bring the 5 oldest projects present on takenet repository
//
//
// Routes: We only want to brig the 5 oldest repository, so only one route is avaliable.
//
//
// Error handling:
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { fastify } from "fastify";
import { github } from './github.js';

const server = fastify()

server.get('/', async () => {
    const git = new github();
    let returnJSON = {};

    //repositorys -> [tituloRepositório, descricaoRepositório, tituloRepositório, descricaoRepositório, ...]
    const repositorys = await git.getRepos();
    const avatarURL   = await git.getAvatar();

    console.log(repositorys);
    returnJSON.avatarURL          = avatarURL;
    returnJSON.tituloRepositorio0 = repositorys[0];
    returnJSON.repositorio0       = repositorys[1];

    returnJSON.tituloRepositorio1 = repositorys[2];
    returnJSON.repositorio1       = repositorys[3];

    returnJSON.tituloRepositorio2 = repositorys[4];
    returnJSON.repositorio2       = repositorys[5];

    returnJSON.tituloRepositorio3 = repositorys[6];
    returnJSON.repositorio3       = repositorys[7];

    returnJSON.tituloRepositorio4 = repositorys[8];
    returnJSON.repositorio4       = repositorys[9];
    
    //Final JSON:
    // {
    //      'Avatar': 'http://...',
    //      'tituloRepositorio0': 'descricaoRepositorio1',
    //      'tituloRepositorio1': 'descricaoRepositorio1',
    //      'tituloRepositorio2': 'descricaoRepositorio2',
    //      ...
    // }
    return returnJSON;
})

server.listen({
    port: 5000,
    host: '0.0.0.0'
})