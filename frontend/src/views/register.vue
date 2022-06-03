<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'register',
  data() {
    return {
      firstName: '',
      birthName: '',
      lastName: '',
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          firstName: this.firstName,
          birthName: this.birthName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Create a new account
      label(for="firstName") firstName:&nbsp;
        input(v-model="firstName" id="firstName" type="text" placeholder="Your first name" required)
      label(for="birthName") birthName:&nbsp;
        input(v-model="birthName" id="birthName" type="text" placeholder="Your birth name" required)
      label(for="lastName") lastName:&nbsp;
        input(v-model="lastName" id="lastName" type="text" placeholder="Your last name" required)
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
