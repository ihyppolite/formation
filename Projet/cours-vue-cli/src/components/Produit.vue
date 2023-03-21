<script>
export default {
  name: "ProduitComponent",
 
    props: {
        produit: Object
    }
  
};
</script>

<template>
    <li>
        {{ produit.nom }} : {{ produit.quantite }} : {{ produit.prix }}€
    </li>
</template>
