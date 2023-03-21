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
      produit: {
        nom: null,
        prix: null,
        quantite: null,
      },
    };
  },
  methods: {
    ajouter() {
      this.produits.push(this.produit);
      this.produit = {};
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="produit.nom" placeholder="Nom" />
    <input type="text" v-model="produit.quantite" placeholder="Quantité" />
    <input type="text" v-model="produit.prix" placeholder="Prix" />
    <button @click="ajouter">Ajouter</button>
    <ul>
      <ProduitComponent
        v-for="(elt, ind) of produits"
        :key="ind"
        :produit="elt"
      >
      </ProduitComponent>
    </ul>
  </div>
</template>
