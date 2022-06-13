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
    h1 Family Diary - a project by Barnali Smollich
    //- p The time is: {{time}}
    br
    h2 Who is already registered?
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.firstName }}
    div(v-if="liveStreams.length")
    br
    h2 What do you want to do?
    .container
      .box(style='width: 20rem; height: 12rem')
        #carouselExampleCaptions.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3')
          .carousel-inner
            .carousel-item.active
              img.d-block.w-100(alt="random-picture-for-layout" width=100 src="https://picsum.photos/id/102/300/200")
              .carousel-caption.d-none.d-md-block
                h5 Welcome
                p If you are a family member, please login!
            .carousel-item
              img.d-block.w-100(alt="random-picture-for-layout" width=100 src="https://picsum.photos/id/147/300/200")
              .carousel-caption.d-none.d-md-block
                h5 If you do not have a username and password please write to
                p barnaliingermany@gmail.com
            .carousel-item
              img.d-block.w-100(alt="random-picture-for-layout" width=100 src="https://picsum.photos/id/198/300/200")
              .carousel-caption.d-none.d-md-block
                h5 Please be aware that only family members are allowed to sign in
                p Thank you!
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    br
    h2 Do you want to speak to someone?
    div(v-for="stream in liveStreams")
      p {{ stream }}
      button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Click here to take part
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

</template>

<style scoped>
.container {
  /* border: 1px solid #d0d0d0; */
  padding: 12px;
  margin-bottom: 24px;
  margin-top: 12px;
  margin-left: 10px;
  /* border-radius: 8px; */
}
</style>
