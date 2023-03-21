<template>
  <div class="hello">
  {{ msg }}
  </div>
  <div>
    Hello
    <slot default="nom"> humain </slot> 
    <slot name="prenom"> </slot> 
    from {{ ville }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data()      {
  return {
    msg : 'Hello world'
  } },
  props:{
    ville: 
    {
      type:String,
      default : 'Paris'
    }

  }
 
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
