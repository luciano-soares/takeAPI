////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
// Author: Luciano Soares
//
//
// Purpose: This class was developer for Take Blip. This class handle all returns from github's API, as:
//          - Get avatar URL
//          - Get 5 oldest repositorys
//
//
//
//
// Error handling:
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';

export class github{
    #repos = [];
    #avatar = null;

    async getRepository(){
        //Request to get all repository of the take github.
        // To change the github account, simple chage the string 'https://api.github.com/users/takenet/repos?sort=created&direction=asc' to ''https://api.github.com/users/{{username}}/repos?sort=created&direction=asc''
        try {
            const headers = {
                'Authorization': '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'
            }
            const response = await axios.get('https://api.github.com/users/takenet/repos?sort=created&direction=asc', { headers });
            this.getFiveFirstRepos(response.data);
        } 
        catch (error) {
            console.error(error);
        }
    }

    async getFiveFirstRepos(repos){
        //Method created to get the 5 oldest repository from previous request made on method "getRepository"
        for(let i = 0; i < 5; i++){
            if (repos[i]) {
                console.log(repos[i].description);
                this.setRepos(repos[i].name);
                this.setRepos(repos[i].description);
            }
        }
        this.setAvatar(repos[0].owner.avatar_url)
    }

    setRepos(dataArray){
        this.#repos.push(dataArray);
    }

    setAvatar(url){
        this.#avatar = url;
    }

    async getRepos(){
        await this.getRepository();
        return this.#repos;
    }

    async getAvatar(){
        await this.getRepository();
        return this.#avatar;
    }
}