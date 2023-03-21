<script>
export default {
  name: "ProduitComponent",
};
</script>

<template>
  <div>
    <p><slot name="nom"> </slot></p>
    <p><slot name="prix"> </slot></p>
    <p><slot name="quantite"> </slot></p>
  </div>
</template>
