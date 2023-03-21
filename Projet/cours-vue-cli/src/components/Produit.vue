<script>
export default {
  name: "ProduitComponent",
    data(){
        return {
            etat :false,
            qteCommande :null
        }
    },
    props: {
        produit: Object
    },
    methods : {
        changerEtat() {
            this.etat = !this.etat
        },
        envoyer(){
            this.$emit ('sendData', this.qteCommande),
            this.changerEtat()
        }
    },
    emits : ['sendData'],
  
};
</script>

<template>
    <li>
        {{ produit.nom }} : {{ produit.quantite }} : {{ produit.prix }}€ <input type="number" v-model="qteCommande"> <button :disabled="etat" @click="envoyer">bouton1</button> 
    </li>
</template>
