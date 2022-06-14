<script>
// import Counter from '@/components/counter.vue'
import UserCard from '@/components/user-card.vue'
import DocumentCard from '@/components/document-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: { UserCard },
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
        { name: 'Patientenverfuegung', description: 'What should happen if you cannot express your will' },
        { name: 'Betreuungsvollmacht', description: 'Who is allowed to handle the administrative work' },
        { name: 'Testament', description: 'Who gets what after your death' },
        {
          name: 'Personalausweis',
          description: 'It is not allowed to store a copy of the passport but save the number',
        },
        { name: 'Bankvollmacht', description: 'Who has access to your bank accounts as a representative' },
        { name: 'Other', description: 'Which other documents are important for you' },
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
    h1 Documents for emergency cases
      UserCard(:user="user" v-if="user")
    br
    h2 Please click on the button to open the document
    br
    .container
      .row
        .col-24.col-lg-12.col-xl-6(v-for="document in documents")
          DocumentCard(:name="document.name" :description="document.description")
    //- Counter
</template>

<style lang="scss">
.about {
  margin-left: 40px;
}
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(15, 15, 15);
}
</style>
