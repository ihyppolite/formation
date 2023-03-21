<script>
import ProduitComponent from "@/components/Produit.vue";

export default {
  name: "PrimeurComponent",
  components: {
    ProduitComponent,
  },
  data() {
    return {
      produits: [
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 },
      ],
      nom: "",
      prix: "",
      quantite: "",
    };
  },
  methods: {
    pushProduits(nom, prix, quantite) {
      this.produits.push({ nom, prix, quantite });
    },
  },
};
</script>

<template>
  <div v-for="(elt, ind) in produits" :key="ind">
    <ProduitComponent>
      <template #nom>{{ elt.nom }}</template>
      <template #prix></template>
      <template #quantite></template>
    </ProduitComponent>
  </div>

  <div>
    <div>
      <label>Nom du fruit </label>
      <input v-model="nom" type="text" />
    </div>
    <div>
      <label> prix du fruit</label>
      <input v-model="prix" type="text" />
    </div>
    <div>
      <label>quantite de fruit </label>
      <input v-model="quantite" type="text" />
    </div>
    <button @click="pushProduits(nom, prix, quantite)">Ajouter Produit</button>
  </div>
</template>
