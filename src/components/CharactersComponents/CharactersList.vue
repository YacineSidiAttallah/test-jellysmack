<template>
  <div v-if="!isSearched">
    <div class="list-container">
      <router-link v-for="character in currentPageCharacters" :key="character.id"
        :to="{name:'character-details', params: {id: character.id}}">
        <b-card :title="character.name" :img-src="character.image" class="mb-2 custom-card-style">
        </b-card>
      </router-link>
    </div>
  </div>
  <div v-else>
    <div class="list-container">
      <router-link v-for="character in searchResults" :key="character.id"
        :to="{name:'character-details', params: {id: character.id}}">
        <b-card :title="character.name" :img-src="character.image" class="mb-2 custom-card-style">
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: "CharactersList",
    computed: mapGetters(['currentPageCharacters', 'isSearched', 'searchResults']),
  }
</script>

<style scoped>
  .list-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .character-name {
    font-size: 0.8em;
    padding: 5px;
    margin-top: 10px;
  }

  .card-title {
    font-size: 1em;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .custom-card-style {
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    width: 10rem;
  }

  .custom-card-style:hover {
    background-color: rgb(245, 245, 245);
    box-shadow: 4px 4px 5px 0.5px rgb(0, 0, 0, 0.5);
    width: 10.5rem;
  }

  h5 {
    text-align: center;
  }
</style>