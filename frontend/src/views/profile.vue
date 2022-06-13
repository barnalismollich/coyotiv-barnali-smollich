<script>
// @ is an alias to /src
// import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  // components: { Counter },
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
    h1 Family Diary
    br
    h2 Store and get the most important documents needed in an case of emergency
    // p The time is: {{time}}
    br
    h2 Who is using this application?
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.firstName }} {{ user.lastName }}

    //- h2 Photos

    //-   .photo
    //-     img(:src="`https://picsum.photos/seed/picsum/200/300`" :alt="random-picture" :title="random-picture")
    br
    h2 What do you want to do?
      .box
        #carouselExampleCaptions.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3')
          .carousel-inner
            .carousel-item.active
              img.d-block.w-100(alt="random-picture-for-homepage" width=200 src="https://picsum.photos/id/1045/300/200")
              .carousel-caption.d-none.d-md-block
                h5 You are on the homepage of the Family Diary
                p It contains the most important documents in case of an emergency
            .carousel-item
              img.d-block.w-100(alt="random-picture-for-homepage" width=200 src="https://picsum.photos/id/106/300/200")
              .carousel-caption.d-none.d-md-block
                h5 If you want to see the documents please login
                p If you have any questions please contact admin@smollich.de
            .carousel-item
              img.d-block.w-100(alt="random-picture-for-homepage" width=200 src="https://picsum.photos/id/121/300/200")
              .carousel-caption.d-none.d-md-block
                h5 Do you want to get access? Write an e-mail to admin@smollich.de
                p Access is restricted to family members only (i.e. not a public site)
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
        div(v-if="liveStreams.length")
    br
    h2 Do you want to talk to a family member? Click on the "Go Live" button!
    div(v-for="stream in liveStreams")
      p {{ stream }}
      button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Go live
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
