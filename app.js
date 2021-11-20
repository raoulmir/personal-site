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
const vm = app.mount('#app')