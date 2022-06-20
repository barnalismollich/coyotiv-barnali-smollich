<script>
export default {
  name: 'DocumentCard',
  props: {
    name: String,
    description: String,
    firstName: String,
  },
}
</script>

<template lang="pug">
.card-container
  h3 {{ name }}
  p {{ description }}
  form(action='/api/download', method='GET')
    input(type='hidden' name='name' :value='name')
    input(type='hidden' name='firstName' :value='firstName')
    input(type='submit', value='Download')
  //- a.button.btn.btn-primary.link(href="/api/download?file=" + firstName + '-' + name + '.pdf') Open document The button code from bootstrap does not function, therefore a form was implemented.
  form(action='/api/upload', method='POST', enctype='multipart/form-data')
    p
      input(type='file', name='file' value='Select document', accept='application/pdf')
      input(type='submit', value='Upload')
      input(type='hidden' name='name' :value='name')
      input(type='hidden' name='user' :value='firstName')
  //- a.card-container.link(href="/") Go to document
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  border: 1px solid #d0d0d0;
  padding: 12px;
  background-color: #f4eeee;
  color: rgb(15, 15, 15);
  margin-bottom: 24px;
  margin-left: 0 2em;
  border-radius: 8px;
}
h3 {
  font-size: 24px;
}
p {
  font-size: 20px;
}
a.button.btn.btn-primary.link {
  font-size: 20px;
}
input {
  font-size: 16px;
}
</style>
