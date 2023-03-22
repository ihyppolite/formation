<template lang="">
  <div>
    <h2>Compteur</h2>
    <button @click="decrementer">-</button>
    {{ counter.valeur }} : {{ counter.etat }}
    <button @click="incrementer">+</button>
  </div>
</template>
<script setup>
import { reactive , onUpdated } from "vue";

const compteur = {valeur : 0 , etat : 'null'}
const counter = reactive(compteur )
    const decrementer = () => {
      counter.valeur--
    };
    const incrementer = () => {
      counter.valeur++
    };
    onUpdated(() => {
      if(counter.valeur > 0) {
          counter.etat =" positif"
      }else if(counter.valeur < 0){
        counter.etat =" negatif"
      }else {
        counter.etat =" null"
      }
    })
     


// export default {
//   setup() {
//     const compteur = ref(0);
//     const decrementer = () => {
//       compteur.value--
//     };
//     const incrementer = () => {
//       compteur.value++
//     };

//     return {
//       compteur,
//       decrementer,
//       incrementer,
//     };
//   },
// };
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
