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
