<script>
// import Counter from '@/components/counter.vue'
import UserCard from '@/components/user-card.vue'
import DocumentCard from '@/components/document-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: { UserCard },
  props: ['user'],
  data() {
    return {
      user: null,
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
  data() {
    return {
      documents: [
        {
          name: 'Living Will',
          description: 'What should happen if you cannot express your will',
        },
        {
          name: 'Power of Attorney',
          description: 'Who is allowed to handle the administrative work',
        },
        { name: 'Testament', description: 'Who gets what after your death' },
        {
          name: 'Passport Number',
          description: 'Just save the number here',
        },
        {
          name: 'Power of Attorney for the bank',
          description: 'Who has access to your bank accounts as a representative',
        },
        { name: 'Other', description: 'Please upload here other important documents if required' },
      ],
    }
  },
  components: {
    DocumentCard,
  },
}
</script>

<template lang="pug">
  .about
    br
    h1.text-center Documents for emergency cases for {{ user.firstName}}
      UserCard(:user="user" v-if="user")
    br
    h2.text-center Please click on the respective button to upload or open a document
    br
    .container
      .row
        .col-24.col-lg-12.col-xl-6(v-for="document in documents")
          DocumentCard(:name="document.name" :description="document.description" :firstName="user.firstName")
    //- Counter
</template>

<style lang="scss">
.about {
  margin-left: 0 2em;
}
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: rgb(15, 15, 15);
}
h1 {
  font-size: 30px;
}
h2 {
  font-size: 20px;
}
</style>
