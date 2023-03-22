import { defineRule } from "vee-validate";

// fichiers pour fonctionn globale de vee-validate 

defineRule('minMax', (value,[ min , max]) => {

    if (!value) {
        return "Le champ est obligatoire"
    }
    if (value < min) {
        return `La valeur doit être supérieure ou égale à ${min}`
    }
    if (value > max) {
        return `La valeur doit être inférieure ou égale à ${max}`
    } 
    return true

})