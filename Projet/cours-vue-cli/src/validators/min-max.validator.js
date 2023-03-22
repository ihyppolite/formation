import { defineRule } from "vee-validate";

// fichiers pour fonctionn globale de vee-validate 

defineRule('minMax', (value,[ min = 0 , max = 55]) => {
    const valeur = Number(value)
    if (!value) {
        return "Le champ est obligatoire"
    }
    if (valeur < min) {
        return `La valeur doit être supérieure ou égale à ${min}`
    }
    if (valeur > max) {
        return `La valeur doit être inférieure ou égale à ${max}`
    } 
    return true

})