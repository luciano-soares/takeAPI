import request from 'request';

export class github{
    #repos = [];

    getRepository(){
        let options = {
            'method': 'GET',
            'url': 'https://api.github.com/users/takenet/repos?sort=created&direction=asc',
            'headers': {
              "User-Agent": "luciano-soares"
            }
        };
        request(options, (error, response) => {
            if (error) {
              throw new Error(error);
            }
      
            const repository = JSON.parse(response.body);
            //console.log(repository["items"][0]["description"])
            this.getFiveFirstRepos(repository);
        });
    }

    getFiveFirstRepos(repos){
        for(let i = 0; i < 5; i++){
            console.log(repos[i]["description"])
            this.setRepos(repos[i]["description"])
        }
    }

    setRepos(dataArray){
        this.#repos.push(dataArray);
    }

    getRepos(){
        return this.#repos;
    }
}