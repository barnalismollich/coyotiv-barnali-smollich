<template lang="pug">
.card-container
  h3 {{ name }}
  p {{ description }}
  a.button.btn.btn-primary.link(href='/') Open document
  //- a.card-container.link(href="/") Go to document
</template>

<script>
export default {
  name: 'DocumentCard',
  props: {
    name: String,
    description: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  border: 1px solid #d0d0d0;
  padding: 12px;
  background-color: #f4eeee;
  color: rgb(15, 15, 15);
  margin-bottom: 24px;
  margin-left: 12px;
  border-radius: 8px;
}
</style>
