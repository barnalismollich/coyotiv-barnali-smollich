<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      user: [],
    }
  },
  async created() {
    this.user = await this.fetchSession()
  },
  methods: {
    ...mapActions(['logout', 'fetchSession']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template lang="pug">
  #app
    //- #nav
    //-   router-link(to="/profile") Profile
    //-   router-link(to="/login") Login
    //-   router-link(to="/register") Register
    //-   a(@click="doLogout" href="#") Logout


    //- #logo
    //-   img(scr="\\wsl.localhost\Ubuntu\home\barnali\dev\coyotiv\barnali\coyotiv-barnali-smollich\frontend\public\img\icons" alt="logo for family diary")

    nav#nav.navbar.fixed-top.navbar-expand-lg.bg-light
      .container-fluid
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarTogglerDemo01', aria-controls='navbarTogglerDemo01', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarTogglerDemo01.collapse.navbar-collapse
          router-link.navbar-brand(scr="https://picsum.photos/id/584/300/200" alt="logo for family diary" to='/') FamilyDiary
          .site-logo
            img(scr="https://picsum.photos/id/584/300/200" alt="logo for family diary" to='/')
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
              router-link.nav-link(v-if="user" to="/profile") Profile
              //- a.nav-link.active(aria-current='page', href='#') Home
            li.nav-item
              router-link.nav-link(v-if="!user" to="/login") Login
            li.nav-item
              router-link.nav-link(v-if="!user" to="/register") Register
            li.nav-item
              a.nav-link(v-if="user" @click="doLogout" href="#") Logout
    nav#nav.navbar.fixed-bottom.navbar-expand-lg.bg-light
      .container-fluid
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarTogglerDemo01', aria-controls='navbarTogglerDemo01', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarTogglerDemo01.collapse.navbar-collapse
          router-link.navbar-brand(to='/') FamilyDiary
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
              router-link.nav-link(to="/privacy-policy") Privacy Policy
              //- a.nav-link.active(aria-current='page', href='#') Home
            li.nav-item
              router-link.nav-link(to="/terms-of-use") Terms of Use
            li.nav-item
              router-link.nav-link(to="/cookies-policy") Cookies Policy
            li.nav-item
              router-link.nav-link(to="/disclaimer") Disclaimer

    router-view

    //- h2.filled-out-documents-title Filled out documents
    //- .container
    //-   .row
    //-     .col-12.col-lg-6.col-xl-4(v-for="document in documents")
    //-       DocumentCard(:name="document.name" :description="document.description")

</template>

<style lang="scss">
#app {
  margin: 0 2rem;
  margin-top: 70px;
  margin-bottom: 70px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(15, 15, 15);
  .nav-link {
    font-size: 16px;
    .site-logo {
      width: 50px;
      height: 50px;
    }
  }

  // .filled-out-documents-title {
  //   color: green;
  //   margin-bottom: 24px;
  // }
}
#nav {
  padding: 16px;
  margin: 0 2rem;
}

a {
  font-weight: bold;
  color: rgb(15, 15, 15);

  &.router-link-exact-active {
    color: #0518a9;
  }
}
</style>
