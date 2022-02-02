import Characters from './Views/Characters'
import CharacterDetails from './Views/CharacterDetails.vue'

export default [
    {
        path: '/characters',
        component: Characters,
        name: 'characters',
        alias:'/'
    }, {
        path: '/characters/:id',
        component: CharacterDetails,
        name: 'character-details'
    }
]