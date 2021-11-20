import { Navigation } from '/components/navigation.js'
import { Window } from '/components/window.js'
import * as files from '../content/index.js'

const root = {
    provide: {
      files: files
    },
    data() {
      return {
        message: 'Hello World',
        currentRoute: '/'
      }
    },
    methods: {
      setRoute(route) {
        this.currentRoute = route
      } 
    }
  }

const app = Vue.createApp(root)
app.component('navigation', Navigation)
app.component('window', Window)

const vm = app.mount('#app')