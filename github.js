import axios from 'axios';

export class github{
    #repos = [];

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
                this.setRepos(repos[i].description);
            }
        }
    }

    setRepos(dataArray){
        this.#repos.push(dataArray);
    }

    async getRepos(){
        await this.getRepository();
        return this.#repos;
    }
}