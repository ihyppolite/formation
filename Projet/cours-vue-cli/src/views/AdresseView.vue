<script setup>
import { useRoute , useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter()

const adresse =computed(() => {
  return route.query;
})
</script>

<template>
  <p>Personne demandée : {{ $route.query.id }} : {{ id }}</p>
  <ul>
    <li>{{ adresse.rue }}</li>
    <li>{{ adresse.ville }}</li>
    <li>{{ adresse.codePostal }}</li>
    <button  @click="router.push('/')">Home </button> <!--redirection useRouter -->

  </ul>
</template>
