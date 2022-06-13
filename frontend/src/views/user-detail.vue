<script>
// import Counter from '@/components/counter.vue'
import UserCard from '@/components/user-card.vue'
import documentCard from '@/components/document-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: { UserCard, documentCard },
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
}
</script>

<template lang="pug">
  .about
    h1 Here you can find the documents of each family member i.e. each user
    UserCard(:user="user" v-if="user")
    // documentCard(:name="document.name" :description="document.description")
    // Counter
    <form action="/api/upload" method="post" enctype="multipart/form-data">
      <input type="file" id="file" name="file" />
      <input type="submit" name="submit" />
    </form>
</template>
