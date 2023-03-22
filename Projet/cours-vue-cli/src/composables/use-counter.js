import { reactive, onUpdated } from 'vue';


export default function useCounter(min = -10, max = 10, pas = 1) {

    const compteur = { valeur: 0, etat: 'nul' }
    const counter = reactive(compteur)

    const decrementer = () => {
        if (counter.valeur - pas >= min)
            counter.valeur -= pas
    }

    const incrementer = () => {
        if (counter.valeur + pas <= max)
            counter.valeur += pas
    }
    onUpdated(() => {
        if (counter.valeur > 0) {
            counter.etat = 'positif'
        } else if (counter.valeur < 0) {
            counter.etat = 'négatif'
        } else {
            counter.etat = 'nul'
        }
    })
    return {
        counter,
        incrementer,
        decrementer
    }
}