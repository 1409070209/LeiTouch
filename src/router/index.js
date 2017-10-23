import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Alert from '../components/Alert.vue'

Vue.use(Router)
console.log(123);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'LeiNuo',
            component: Index,Alert
        }
    ]
})
