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
    //- form( @submit="submitLogin")
    //-   h1 Creating a new account is only possible by the admin as this is a private site
    //-   label(for="firstName") firstName:&nbsp;
    //-     input(v-model="firstName" id="firstName" type="text" placeholder="Your first name" required)
    //-   label(for="birthName") birthName:&nbsp;
    //-     input(v-model="birthName" id="birthName" type="text" placeholder="Your birth name" required)
    //-   label(for="lastName") lastName:&nbsp;
    //-     input(v-model="lastName" id="lastName" type="text" placeholder="Your last name" required)
    //-   label(for="email") Email:&nbsp;
    //-     input(v-model="email" id="email" type="email" placeholder="Your email" required)
    //-   label(for="password") Password:&nbsp;
    //-     input(v-model="password" id="password" type="password" placeholder="Your password" required)
    //-   input(type="submit" value="Register")
    //- div(v-if="backendError") {{ backendError }}
    //- div Already have an account? <router-link to="/login">Log in</router-link>

    body.text-left
      main.form-signin
        form(@submit="submitLogin")
          h1.h3.mb-3.fw-normal Creating a new account is only possible by the admin as this is a private site
          label(for="firstName") Enter your first name&nbsp;
            input#floatingInput.form-control(v-model="firstName" type="text" placeholder="Your first name" required)

          label(for="birthName") Enter your birth name&nbsp;
            input#floatingInput.form-control(v-model="birthName" type="text" placeholder="Your birth name" required)

          label(for="lastName") Enter your last name&nbsp;
            input#floatingInput.form-control(v-model="lastName" type="text" placeholder="Your last name" required)

          label(for='floatingEmail') Enter your e-mail&nbsp;
            input#floatingInput.form-control(v-model="email" type='email' placeholder='name@example.com' required)

          label(for='floatingPassword') Create a password&nbsp;
            input#floatingPassword.form-control(v-model="password" type='password' placeholder='Password' required)

          .checkbox.mb-3
            label
              input(type='checkbox' value='remember-me')
              |  Remember me
          button.btn.btn-lg.btn-primary(type='submit' value="Register") Register
          div(v-if="backendError") {{ backendError }}
          div Already have an account? <router-link to="/login">Login</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
.register {
  margin-top: 18px;
}
form {
  margin: 1rem;
  width: 50rem;
}
</style>
