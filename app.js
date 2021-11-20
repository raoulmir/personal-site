import { Navigation } from '/components/navigation.js'
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
const vm = app.mount('#app')