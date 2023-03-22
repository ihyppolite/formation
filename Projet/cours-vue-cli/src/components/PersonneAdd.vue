<template lang="ajouterPersonne">
  <h2></h2>
  <form  @submit.prevent="ajouterPersonne "> <!-- le prevent permet de ne pas recharger la page -->
    <div>
      Nom  : <input type="text" v-model="personne.nom" />
    </div>
  
  <div>
      Prenom : <input type="text" v-model="personne.prenom" />
    </div>
    <div>
       Age : <input type="text"  v-model="personne.age" />
    </div>
    <button>
      ajouterPersonne
    </button>
  </form>
  
</template>

<script>
export default {
    data(){
        return {

            personne : {nom: null , prenom: null , age : null},

        }

    },
    methods :{
        ajouterPersonne(){
            console.log(this.personne)
        }
    }
};
</script>
<style lang=""></style>
