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
  h1 These are the documents of {{user.firstName}} {{user.lastName}} born {{user.birthName}}
  h2 He/She has {{user.documents.length}} documents

</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(24, 204, 0);
  background: rgb(85, 221, 0);
  border-radius: 0.3rem;
}
</style>
