<template lang="ajouterPersonne">
  <h2></h2>
  <Form  @submit.prevent="ajouterPersonne "> <!-- le prevent permet de ne pas recharger la page -->
    <div>
      Nom  : <Field type="text" v-model="personne.nom" />
    </div>
  
  <div>
      Prenom : <Field type="text" v-model="personne.prenom" />
    </div>
    <div>
       Age : <Field type="text"  v-model="personne.age" />
    </div>
    <button>
      ajouterPersonne
    </button>
  </Form>
  
</template>

<script>
import { Field , Form} from 'vee-validate'
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
    },
    components :{
      Field,
      Form
    }
};
</script>
<style lang=""></style>
