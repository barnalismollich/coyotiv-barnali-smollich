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
  h1 {{user.firstName}}
  h2 Documents ({{user.documents.length}})
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #c80;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
