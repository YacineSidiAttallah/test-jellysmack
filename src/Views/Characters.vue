<template>
  <div class="characters-vue-container">
    <characters-list />
    <pagination />
  </div>
</template>

<script>
  import CharactersList from '../components/CharactersComponents/CharactersList.vue'
  import Pagination from '../components/Utils/Pagination.vue'

  export default {
    name: 'Characters',
    components: {
      CharactersList,
      Pagination,
    },
  }
</script>

<style>
</style>