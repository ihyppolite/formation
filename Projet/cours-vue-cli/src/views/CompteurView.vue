<template lang="">
  <div>
    <h2>Compteur</h2>
    <button @click="decrementer">-</button>
    {{ compteur }}
    <button @click="incrementer">+</button>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const compteur = ref(0);
    const decrementer = () => {
      compteur.value--
    };
    const incrementer = () => {
      compteur.value++
    };

    return {
      compteur,
      decrementer,
      incrementer,
    };
  },
};
// export default {
//   data() {
//     return {
//       compteur: 0,
//     };
//   },
//   methods: {
//     decrementer(){
//         this.compteur--

//     },
//     incrementer(){
//         this.compteur++
//     }
//   },
// };
</script>
<style lang=""></style>
