<template lang="">
  <div>
    <h2>Compteur</h2>
    <button @onlcik="decrementer">-</button>
    {{ compteur }}
    <button @onlcik="incrementer">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      compteur: 0,
    };
  },
  methods: {
    decrementer(){
        this.compteur--

    },
    incrementer(){
        this.compteur++
    }
  },
};
</script>
<style lang=""></style>
