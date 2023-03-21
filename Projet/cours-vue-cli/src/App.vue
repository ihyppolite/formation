<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <HelloWorld > 
  <template #default> Wick</template>
  <template  #prenom> john </template>
</HelloWorld>


<PrimeurComponent></PrimeurComponent>
 
</template>

<script>
 import HelloWorld from './components/HelloWorld.vue'
 import PrimeurComponent from '@/components/Primeur.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
