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
        { name: 'Personalausweis', description: 'Your passport number' },
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
    h2.filled-out-documents-title At present you can find the following documents here
    br
    .container
      .row
        .col-24.col-lg-12.col-xl-6(v-for="document in documents")
          DocumentCard(:name="document.name" :description="document.description")
    //- Counter
</template>

<style lang="scss">
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-left: 10px;
}
.filled-out-documents-title {
  color: green;
  margin-bottom: 24px;
  background: bg-secondary;
}
</style>
