<template>
    <b-card no-body class="overflow-hidden" style="width:100%">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="selectedCharacter.data.image" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="selectedCharacter.data.name">
                    <b-card-text class="details">
                        <div class="infos-title">
                            Informations Générales
                        </div>
                        <div class="one-data">
                            <span class="data-title">Genre:</span>
                            {{selectedCharacter.data.gender.length !== 0? selectedCharacter.data.gender:"Non défini"}}
                        </div>
                        <div class="one-data"><span class="data-title">Statut:</span>
                            {{selectedCharacter.data.status.length !== 0? selectedCharacter.data.status:"Non défini"}}
                        </div>
                        <div class="one-data"><span class="data-title">Espèce:</span>
                            {{selectedCharacter.data.species.length !== 0? selectedCharacter.data.species:"Non défini"}}
                        </div>
                        <div class="one-data"><span class="data-title">Type:</span>
                            {{selectedCharacter.data.type.length !== 0? selectedCharacter.data.type:"Non défini"}}
                        </div>
                        <div class="episodes"><span class="data-title">Episodes:</span>
                            <span class="episodes-numbers"><i>{{this.getEpisodes}}.</i></span>
                        </div>
                    </b-card-text>
                    <router-link :to="{name:'characters'}">
                        <b-button class="my-return-btn">
                               <span class="retour">Retour</span>
                            <b-icon-arrow-return-left />
                        </b-button>
                    </router-link>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "CharacterCard",
        props: ['selectedCharacter'],
        computed: {
            getEpisodes() {
                let allepisodes = [];
                this.selectedCharacter.data.episode.forEach(episode => {
                    let splittedURL = episode.split('/');
                    console.log(splittedURL);
                    let epNumber = splittedURL[splittedURL.length - 1];
                    allepisodes.push(epNumber);
                });

                return allepisodes.toString();
            }
        }
    }
</script>

<style scoped>
    .card-title {
        font-size: 2.5em;
        font-weight: 900;
        text-decoration: underline;
        color: #0ab98e;
    }

    .data-title {
        font-weight: 700;
    }

    .one-data {
        margin-bottom: 15px;
    }

    .infos-title {
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 1.5em;
        text-decoration: underline;
    }

    .details {
        font-size: 1.5em;
        margin-bottom: 100px;
    }

    .episodes-numbers {
        font-size: 0.9em !important;
        color: #0ab98e;
    }

    .my-return-btn{
        background-color: rgb(223, 60, 11) !important;
        font-weight: 900;
        border:none;
        float: right;
        margin: 10px;
    }

    .retour{
        font-weight: 600 !important;
        margin-right: 10px;
        font-size: 1.2em;
    }
</style>