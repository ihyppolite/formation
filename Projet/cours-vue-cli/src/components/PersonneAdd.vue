<template>
  <h2>Ajouter une Personne</h2>
  <Form @submit="ajouterPersonne" >
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
          <!-- <Field name="age" type="number" :rules="'minMax:10,150'"/> utilisation de fonction globale de vee-valide -->
          <Field name="age" type="number" :rules="validateage" />
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
import  * as yup from 'yup'
export default {
  components: {
      Field,
      Form,
      ErrorMessage
  },
  data() {
      return {
          // validateur avec yup 
          validateName : yup
          .string()
          .required("Le champs est obligatoire ")
          .matches(/^[A-Z]{1}[a-z]{19}$/ , "Le champs doit commencer par une Maj est contenir mon de 20 caracteres "),
          validateage : yup
          .number()
          .required(" le champs est obligatoire ")
          .min(0, "age min 0")
          .max(150, " age max 150")

      }
  },
  methods: {
      ajouterPersonne(values) {
          console.log(values)
      },
      // validateName(value) {
      //     if (!value) {
      //         return "Le champ est obligatoire"
      //     }
      //     if (value[0] < 'A' || value[0] > 'Z') {
      //         return "La première lettre doit être en majuscule"
      //     }
      //     return true
      // },
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