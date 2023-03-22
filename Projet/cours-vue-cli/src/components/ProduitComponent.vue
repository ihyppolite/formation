<script setup>
import { ref, defineEmits , defineProps } from "vue";
import PrixComponent from "./PrixComponent.vue";

defineProps ({
    produit: Object
})

const etat = ref(false);
const qteCommande = ref(null);


 const emit = defineEmits(['sendData'])
const changerEtat = () => {
  etat.value = true;
};
const envoyer = () => {
   emit("sendData", qteCommande.value), changerEtat();
};
</script>

<template>
  <li>
    {{ produit.nom }} : {{ produit.quantite }} : <PrixComponent :prix="produit.prix"></PrixComponent>
    <input type="number" v-model="qteCommande" />
    <button :disabled="etat" @click="envoyer">bouton1</button>
  </li>
</template>
