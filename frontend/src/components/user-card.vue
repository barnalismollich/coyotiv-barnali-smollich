<script>
export default {
  name: 'UserCard',
  props: ['user'],
  // data() {
  //   return {
  //     defaultDocument: 'This user has no documents.',
  //   }
  // },
  // This file is necessary to create the user page.
}
</script>

<template lang="pug">
.box
  h1 ({{user.firstName}}) ({{user.birthName}}) ({{user.lastName}})
  h2 Documents ({{user.documents.length}})
  // <button type="button" class="btn btn-primary">Primary</button>

</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid rgb(75, 75, 75);
  background: rgb(35, 35, 35);
  border-radius: 0.3rem;
}
</style>
