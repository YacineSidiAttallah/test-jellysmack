<template>
    <b-pagination class="my-pagination" v-model="currentPageNumber" :total-rows="maxPages" :per-page="1" align="fill"
        :change="updatePage()">
    </b-pagination>
</template>

<script>
    import {
        mapGetters,
        mapActions,
    } from 'vuex'

    export default {
        name: "Pagination",
        data() {
            return {
                currentPageNumber: 1,
                totalRows: null,
            }
        },
        computed: mapGetters(['maxPages', 'isSearched']),
        methods: {
            ...mapActions(['fetchCharactersPerPage', 'defineNumberOfPages', 'searchByCharactersNames']),
            async updatePage() {
                if (!this.isSearched) {
                    await this.fetchCharactersPerPage(this.currentPageNumber);
                    scrollTo(0, 0);
                } else {
                    await this.searchByCharactersNames(this.currentPageNumber);
                    scrollTo(0, 0);
                }
            }
        },
        async mounted() {
            await this.defineNumberOfPages();
        }
    }
</script>

<style>
    .my-pagination {
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
    }

    .page-item.active .page-link {
        background-color: #0ab98e !important;
        border-color: #079c77 !important;
        color: white !important;
    }

    .page-link {
        color: #0ab98e !important;
        font-weight: 700;
    }

    .page-link:hover {
        background-color: #0ab98e !important;
        color: white !important;
    }
</style>