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
                quantite: null
            }
    };
  },
  methods: {
    ajouter() {
            this.produits.push(this.produit)
            this.produit = {}
        }
  },
};
</script>

<template>
  <div v-for="(elt, ind) in produits" :key="ind">
    <ProduitComponent :proproduits = elt>
      
    </ProduitComponent>
  </div>
  <div>
        <input type="text" v-model="produit.nom" placeholder="Nom">
        <input type="text" v-model="produit.prix" placeholder="Prix">
        <input type="text" v-model="produit.quantite" placeholder="Quantité">
        <button @click="ajouter">
            Ajouter
        </button>
    </div>
</template>
