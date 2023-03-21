<template>
  <div class="hello">
  {{ msg }}
  </div>
  <div>
    Hello
    <slot name="nom"> HUMAIN</slot> 
    <slot name="prenom"> </slot> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data()      {
  return {
    msg : 'Hello world'
  } }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
