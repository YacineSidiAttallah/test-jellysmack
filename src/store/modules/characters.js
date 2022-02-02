import api from "../../api/rickAndMortyApi";

const state = {
    maxPages: null,
    currentPageCharacters: {},
    searchResults:{},
    searchedNames:"",
    isSearched:false,
};

const getters = {
    maxPages: state => state.maxPages,
    currentPageCharacters: state => state.currentPageCharacters,
    searchResults: state => state.searchResults,
    isSearched:state => state.isSearched,
};

const actions = { 
    async fetchCharactersPerPage({commit}, pageNumber){
        const response = await api.fetchCharactersPerPage(pageNumber);
        const characters = response.data.results;
        commit('setCurrentPageCharacters',characters);
    },

    setSearchedNames({commit}, searchedNames){
        commit('setSearchedNames',searchedNames);
    },
    
     async searchByCharactersNames({commit, state}, pageNumber) {
       const response = await api.filterCharacters(state.searchedNames);
       console.log(response);
       let paginatedResults = {}
       let results = response.data;

       let nbOfPages = Math.round(response.data.length / 20);
       if(nbOfPages === 0 ) nbOfPages=1;
       
       for (let i = 0; i < nbOfPages; i++) {
        let onePageCharacters = [];
        for (let j=0; j < 20; j++) {
           let characterToAdd = results[i*20+j];
           if(characterToAdd !== undefined) onePageCharacters.push(characterToAdd);
        }
        paginatedResults[i] = onePageCharacters;
       }

       console.log(paginatedResults);
       let desiredPage = paginatedResults[pageNumber-1];
       
       commit('setSearchResults', {desiredPage, nbOfPages});
    },

    async defineNumberOfPages({commit}){
        const response = await api.getNumberOfPages();
        commit('setMaxPagesNumber', response.data.info.pages);
    }
};

const mutations = {
    setCurrentPageCharacters: (state, characters) => {
        state.currentPageCharacters = characters;
    },

    setSearchedNames: (state, searchedNames) => {
        state.searchedNames = searchedNames;
    },

    setSearchResults:(state, {desiredPage, nbOfPages})=>{
        state.searchResults = desiredPage;
        state.maxPages = nbOfPages;
        state.isSearched = true;
    },

    setResetSearch: state => {
        state.isSearched = false;
    },

    setMaxPagesNumber: (state, maxPages) => {
        state.maxPages = maxPages;
    },


};

export default {
    state,
    getters,
    actions,
    mutations
}