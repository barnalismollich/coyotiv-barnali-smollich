<script>
import { mapActions } from 'vuex'
import documentCard from './components/document-card.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  data() {
    return {
      documents: [
        { name: 'Patientenverfuegung', description: 'Patientenverfuegung' },
        { name: 'Betreuungsvollmacht', description: 'Betreuungsvollmacht' },
      ],
    }
  },
  components: {
    documentCard,
  },
}
</script>

<template lang="pug">
  #app
    #nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
      router-view

    h2.filled-out-documents-title Filled out documents
    .container
      .row
        .col-12.col-lg-6.col-xl-4(v-for="document in documents")
          documentCard(:name="document.name" :description="document.description")

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .filled-out-documents-title {
    color: green;
    margin-bottom: 24px;
  }
}
#nav {
  padding: 30px;

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
