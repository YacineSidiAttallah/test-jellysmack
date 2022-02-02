<template>
    <div class="character-infos-container">
        <character-card :selectedCharacter="selectedCharacter" />
    </div>

</template>

<script>
    import CharacterCard from '../components/CharactersComponents/CharacterCard.vue'
    import api from "../api/rickAndMortyApi";

    export default {
        name: "CharacterDetails",
        data() {
            return {
                selectedCharacter: null,
            }
        },
        components: {
            CharacterCard,
        },
        async created() {
            this.selectedCharacter = await api.getSelectedCharacter(this.$route.params.id);
            console.log(this.selectedCharacter);

        }
    }
</script>

<style scoped>
    .character-infos-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>