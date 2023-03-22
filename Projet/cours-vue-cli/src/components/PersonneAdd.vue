<template>
  <h2>Ajouter une Personne</h2>
  <Form @submit="ajouterPersonne">
      <div>
          Nom :
          <Field name="nom" type="text" :rules="validateName"/>
          <ErrorMessage name="nom"/>
      </div>
      <div>
          Prénom :
          <Field name="prenom" type="text" :rules="validateName"/>
          <ErrorMessage name="prenom"/>
      </div>
      <div>
          Age :
          <Field name="age" type="number" :rules="'minMax:10,15'"/> <!--utilisation de fonction globale de vee-valide-->
          <ErrorMessage name="age"/>
      </div>
      <button>
          Ajouter
      </button>
  </Form>
</template>

<script>
// npm i vee-validate
import { Field, Form , ErrorMessage } from 'vee-validate'

export default {
  components: {
      Field,
      Form,
      ErrorMessage
  },
  data() {
      return {
          personne: { nom: null, prenom: null, age: null }
      }
  },
  methods: {
      ajouterPersonne(values) {
          console.log(values)
      },
      validateName(value) {
          if (!value) {
              return "Le champ est obligatoire"
          }
          if (value[0] < 'A' || value[0] > 'Z') {
              return "La première lettre doit être en majuscule"
          }
          return true
      },
      // validateAge(value) {
      //     if (!value) {
      //         return "Le champ est obligatoire"
      //     }
      //     if (value > 150 || value < 0) {
      //         return "La valeur doit être comprise entre 0 et 150"
      //     }
      //     return true
      // }
  }
}
</script>