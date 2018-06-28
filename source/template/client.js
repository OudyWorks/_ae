import theme from './theme.less'
import Client from '@oudyworks/backend-template/html/webpack/client'
import common from './common'
import Vue from 'vue'
import backend from '@oudyworks/backend-client'

// Client.mixin.beforeRouteEnter = function(to, from, next, abort) {
//     if(!to.meta.allowed && !Client.store.state.access) {
//         return next({ name: 'login', params: { return: to.path }})
//     } else
//         return next()
// }

// Vue.set(Client.store.state, 'language', 'en')
// Vue.set(Client.store.state, 'keyLanguage', 'fr')
// Vue.set(Client.store.state, 'accesses', [])

const init = () =>
    Client.init()

if (/comp|inter|loaded/.test(document.readyState))
    init()
else
    document.addEventListener(
        'DOMContentLoaded',
        () =>
            init()
    )