<script>
import { mapActions } from 'vuex'
// import DocumentCard from './components/document-card.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  // data() {
  //   return {
  //     documents: [
  //       { name: 'Patientenverfuegung', description: 'Patientenverfuegung' },
  //       { name: 'Betreuungsvollmacht', description: 'Betreuungsvollmacht' },
  //     ],
  //   }
  // },
  // components: {
  //   DocumentCard,
  // },
}
</script>

<template lang="pug">
  #app
    //- #nav
    //-   router-link(to="/profile") Profile
    //-   router-link(to="/login") Login
    //-   router-link(to="/register") Register
    //-   a(@click="doLogout" href="#") Logout


    nav#nav.navbar.navbar-expand-lg.bg-light
      .container-fluid
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarTogglerDemo01', aria-controls='navbarTogglerDemo01', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarTogglerDemo01.collapse.navbar-collapse
          router-link.navbar-brand(to='/') FamilyDiary
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
              router-link.nav-link(to="/profile") Profile
              //- a.nav-link.active(aria-current='page', href='#') Home
            li.nav-item
              router-link.nav-link(to="/login") Login
            li.nav-item
              router-link.nav-link(to="/register") Register
            li.nav-item
              a.nav-link(@click="doLogout" href="#") Logout

    nav#nav.navbar.fixed-bottom.navbar-expand-lg.bg-light
      .container-fluid
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarTogglerDemo01', aria-controls='navbarTogglerDemo01', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarTogglerDemo01.collapse.navbar-collapse
          router-link.navbar-brand(to='/') FamilyDiary
          ul.navbar-nav.me-auto.mb-2.mb-lg-0
            li.nav-item
              router-link.nav-link(to="/privacypolicy") Privacy Policy
              //- a.nav-link.active(aria-current='page', href='#') Home
            li.nav-item
              router-link.nav-link(to="/login") Terms of Use
            li.nav-item
              router-link.nav-link(to="/register") Cookies Policy
            li.nav-item
              router-link.nav-link(to="/register") Disclaimer
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
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // .filled-out-documents-title {
  //   color: green;
  //   margin-bottom: 24px;
  // }
}
#nav {
  padding: 18px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
