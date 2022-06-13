<script>
import { mapActions } from 'vuex'
// import documentCard from './components/document-card.vue'
// import PrivacyPolicy from './views/privacy-policy.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
// data() {
//   return {
//     documents: [
//       { name: 'Patientenverfuegung', description: 'Patientenverfuegung' },
//       { name: 'Betreuungsvollmacht', description: 'Betreuungsvollmacht' },
//     ],
//   }
// },
// components: {
//   documentCard,
// },

//   data() {
//     return {
//       PrivacyPolicy,
//     }
//   },
//   components: {
//     PrivacyPolicy,
//   },
// }
</script>

<template lang="pug">
  #app
    #nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
      router-view

    // h2.filled-out-documents-title Filled out documents
    // .container
    //   .row
    //     .col-12.col-lg-6.col-xl-4(v-for="document in documents")
    //       documentCard(:name="document.name" :description="document.description")

    #nav-link
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          router-link(to="/privacy_policy") Privacy Policy
        </li>
        <li class="nav-item">
          <a class="nav-link" href="privacy_policy">Terms & Conditions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href= "#">Cookies Policy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href= "#">Disclaimer</a>
        </li>
      </ul>


</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

// .logo {
//   height: 120 px;
//   width: 120px;
// }

// .header {
//   padding: 60px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c4874;
  // .filled-out-documents-title {
  //   color: green;
  //   margin-bottom: 24px;
  // }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #05192d;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
