import Characters from './Views/Characters'
import CharacterDetails from './Views/CharacterDetails.vue'

export default [
    {
        path: '/',
        component: Characters,
        name: 'characters',
        alias:'/characters'
    }, {
        path: '/characters/:id',
        component: CharacterDetails,
        name: 'character-details'
    }
]