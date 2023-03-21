<script>
export default {
  name: "ProduitComponent",
  props:{
    proproduits: 
    {
      nom: String,
      prix: String,
      quantite: String
    }
  }
};
</script>

<template>
  <div>
    <p> {{ proproduits.nom }}</p>
    <p> {{ proproduits.prix }}</p>
    <p> {{ proproduits.quantite }}</p>
  </div>
</template>
