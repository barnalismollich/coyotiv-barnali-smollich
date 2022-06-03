<script>
export default {
  name: 'UserCard',
  props: ['user'],
  // data() {
  //   return {
  //     defaultDocument: 'This user has no documents.',
  //   }
  // },
}
</script>

<template lang="pug">
.box
  h1 ({{user.firstName}}) ({{user.birthName}}) ({{user.lastName}})
  h2 Documents ({{user.documents.length}})
  <button type="button" class="btn btn-primary">Primary</button>

.photo
  img(:src="`https://picsum.photos/seed/${user.firstName}/200/300`" :alt="user.firstName" :title="user.firstName")
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #c80;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
