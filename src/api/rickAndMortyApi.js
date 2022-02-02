import axios from 'axios'

const ROOT_URL = "https://rickandmortyapi.com/api/character"

export default {
    fetchCharactersPerPage(pageNumber) {
        return axios.get(`${ROOT_URL}/?page=${pageNumber}`);
    },

    async filterCharacters(characterNames) {
        let searchNames = characterNames.split(',');
        let arrayOfIds = [];

        for (var i = 0; i < searchNames.length; i++) {
            let res = await axios.get(`${ROOT_URL}/?name=${searchNames[i]}`);
            if (res.data.info.next === null)
                res.data.results.forEach(oneCharacter => {
                    arrayOfIds.push(oneCharacter.id)
                });
            else {
                for (var j = 1; j <= res.data.info.pages; j++) {
                    let resTwo = await axios.get(`${ROOT_URL}/?page=${j}&name=${searchNames[i]}`)
                    resTwo.data.results.forEach(oneCharacter => {
                        arrayOfIds.push(oneCharacter.id)
                    });
                }
            }
        }
        return axios.get(`${ROOT_URL}/${arrayOfIds}`);

    },

    getSelectedCharacter(id){
        return axios.get(`${ROOT_URL}/${id}`); 
    },
    getNumberOfPages() {
        return axios.get(`${ROOT_URL}`);
    },
}