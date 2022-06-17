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
    //- form(@submit="submitLogin")
    //-   h1 Log in to your account
    //-   label(for="email") Email:&nbsp;
    //-     input(v-model="email" id="email" type="email" placeholder="Your email" required)
    //-   label(for="password") Password:&nbsp;
    //-     input(v-model="password" id="password" type="password" placeholder="Your password" required)
    //-   input(type="submit" value="Log in")
    //- div(v-if="backendError") {{ backendError }}
    //- div Don't have an account yet? <router-link to="/register">Register</router-link>
    body.text-left
      main.form-signin
        form(@submit="submitLogin")
          h1.h3.mb-3.fw-normal Please log in
          .form-floating
            input#floatingInput.form-control(v-model="email" type='email' placeholder='name@example.com' required)
            label(for='floatingEmail') Email&nbsp;
          .form-floating
            input#floatingPassword.form-control(v-model="password" type='password' placeholder='Password' required)
            label(for='floatingPassword') Password&nbsp;
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
