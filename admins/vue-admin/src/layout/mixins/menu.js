export default {
  computed: {
    routes() {
      return this.$router.options.routes
    },
    menuRoutes() {
      const menuRoutes = []
      loadMenuRoutes(this.routes, menuRoutes)

      function loadMenuRoutes(routes, menuRoutes) {
        if (!routes || !routes.length) {
          return
        }
        routes.forEach(route => {
          const meta = route.meta
          if (meta && meta.menu) {
            const copyRoute = Object.assign({}, route)
            menuRoutes.push(copyRoute)
            copyRoute.children = []
            loadMenuRoutes(route.children, copyRoute.children)
          }
        })
      }
      return menuRoutes
    }
  },
  methods: {

  }
}
