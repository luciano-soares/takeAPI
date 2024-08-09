import axios from 'axios';

export class github{
    #repos = [];
    #avatar = null;

    async getRepository(){
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