<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.login
    body.text-left
      main.form-signin
        form(@submit="submitLogin")
          h1.h3.mb-3.fw-normal Please log in

            label(for='email') email&nbsp;
              input#floatingInput.form-control(v-model="email" type='email' placeholder='name@example.com' required)


            label(for='password') Password&nbsp;
              input#floatingPassword.form-control(v-model="password" type='password' placeholder='Password' required)

          .checkbox.mb-3
            label
              input(type='checkbox' value='remember-me')
              |  Remember me
          button.btn.btn-lg.btn-primary(type='submit' value="Log in") Log in
          div(v-if="backendError") {{ backendError }}
          br
          div Don't have an account yet? Ask for an account by writing to barnaliingermany@gmail.com
          //-  <router-link to="/register"> TEXT </router-link> only needed if I want the users to log in but I do want that



</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
form {
  margin: 0 2rem;
  width: 50rem;
}
</style>
