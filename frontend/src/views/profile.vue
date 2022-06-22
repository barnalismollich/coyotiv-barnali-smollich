<script>
// @ is an alias to /src
// import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  //components: { Counter },
  data() {
    return {
      users: [],
      time: new Date(),
      message: '',
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages']),
  },
}
</script>

<template lang="pug">
  .home
    br
    h1.text-center Welcome to our Family Diary
        //- p The time is: {{time}}
    br
    .container
      .row
        .col-6
            .card
              img.card-img-top(src='https://picsum.photos/id/584/300/200' alt='random-picture-users')
              .card-body
                  h5.card-title If you are a family member click on your name to see your documents
                  p.card-text
                    div(v-for="user in users")
                      router-link(:to="`/users/${user._id}`") {{ user.firstName }}
              //- .card-body
                  //- a.card-link(href='#') Card link
                  router-link(:to="`/users/${user._id}`") {{ user.firstName }}.
        .col-6
            .card
              img.card-img-top(src='https://picsum.photos/id/1037/300/200' alt='Chat function')
              .card-body
                  h5.card-title Do you want to speak to someone?
                  p.card-text
                    div(v-if="liveStreams.length")
                      div(v-for="stream in liveStreams")
                        p {{ stream }}
                        button(@click="joinStream(stream)") Join stream
                    button(@click="goLive") Click here to chat
                    div(v-if="currentLiveStream")
                      h3 Live stream
                      .messages
                        .message(v-for="message in liveStreamMessages")
                          p
                            span {{ message.author }}:&nbsp;
                            span {{ message.body }}
                      form(@submit="sendMessage")
                        input(type="text" v-model="message")
                        input(type="submit" value="Send message")
              //- .card-body
              //-     a.card-link(href='#') Card link

    //- div(v-if="liveStreams.length")
    //- h2 Do you want to speak to someone?
    //-   div(v-for="stream in liveStreams")
    //-     p {{ stream }}
    //-     button(@click="joinStream(stream)") Join stream
    //- button(@click="goLive") Click here to chat
    //- br
    //- div(v-if="currentLiveStream")
    //-   h3 Live stream
    //-   .messages
    //-     .message(v-for="message in liveStreamMessages")
    //-       p
    //-         span {{ message.author }}:&nbsp;
    //-         span {{ message.body }}
    //-   form(@submit="sendMessage")
    //-     input(type="text" v-model="message")
    //-     input(type="submit" value="Send message")
    //- h2 Who is already registered?
    //- div(v-for="user in users")
    //-   router-link(:to="`/users/${user._id}`") {{ user.firstName }}
  </template>

<style scoped>
.home {
  /* border: 1px solid #d0d0d0; */
  padding: 6px;
  margin-bottom: 6px;
  margin-top: 70px;
  margin-left: 0 2em;
}
.card-body {
  margin-bottom: 6px;
  margin-top: 20px;
  margin-left: 0 2em;
}

h1 {
  font-size: 30px;
}
h2 {
  font-size: 26px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 22px;
}
h5 {
  font-size: 22px;
}
p {
  font-size: 22px;
}
</style>
