import Characters from './Views/Characters'
import CharacterDetails from './Views/CharacterDetails.vue'

export default [{
        path: '/',
        redirect: {
            name: 'characters'
        }
    },
    {
        path: '/characters',
        component: Characters,
        name: 'characters'
    }, {
        path: '/characters/:id',
        component: CharacterDetails,
        name: 'character-details'
    }
]