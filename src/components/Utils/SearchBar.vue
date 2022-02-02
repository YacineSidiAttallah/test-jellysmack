<template>
  <div>
    <div class="search">
      <b-form-input v-model="form.names" id="characterNameInput" class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Rechercher un ou des personnages: ex Rick, Morty, ..."></b-form-input>
      <router-link :to="{name:'characters'}">
        <b-button class="my-btn" variant="primary" @click="onSearch">
          <b-icon-search />
        </b-button>
      </router-link>
    </div>
    <div class="checkboxes">
      <div>
        <b-form-group>
          <div class="all-checkboxes">
            <b-form-radio class="mb-2 mr-sm-2 mb-sm-0 my-checkbox" v-model="status"
              :aria-describedby="ariaDescribedby" name="some-radios" value="A">Vivant
            </b-form-radio>
            <b-form-radio class="mb-2 mr-sm-2 mb-sm-0 my-checkbox" v-model="status"
              :aria-describedby="ariaDescribedby" name="some-radios" value="B">Mort
            </b-form-radio>
            <b-form-radio class="mb-2 mr-sm-2 mb-sm-0 my-checkbox" v-model="status"
              :aria-describedby="ariaDescribedby" name="some-radios" value="B">Inconnu
            </b-form-radio>
          </div>
        </b-form-group>
      </div>
      <div class="btn-only">
        <b-button class="my-btn filter-btn" variant="primary">
          Filtrer les résultats
          <b-icon-filter />
        </b-button>
      </div>
    </div>

  </div>

</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: "SearchBar",
    data() {
      return {
        form: {
          names: "",
          status:"",
        },
      }
    },
    props: ['search'],
    computed: {
      ...mapGetters(['isSearched']),
    },
    methods: {
      ...mapActions(['setSearchedNames', 'searchByCharactersNames', 'setResetSearch']),
      async onSearch() {
        this.setSearchedNames(this.form.names);
        await this.searchByCharactersNames();
      },
    }
  }
</script>

<style>
  .form-container {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
  }

  .checkboxes {
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 15px;
  }

  .all-checkboxes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .filter-btn {
    font-size: 0.9em !important;
  }

  .my-checkbox {
    color: white !important;
  }

  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #0ab98e;
    border-color: #0ab98e;
  }

  .my-btn {
    border: none !important;
    background-color: #0ab98e !important;
    transition: 0.3s all ease-in-out;
  }

  .my-btn:hover {
    background-color: blue !important;
  }
</style>