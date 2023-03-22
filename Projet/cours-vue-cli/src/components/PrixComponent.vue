<template lang="">
    <ul>
        <li>Prix HT : {{ prix }}</li>
        <li>Prix TTC : {{ prix  + prix * tva }}</li>
    </ul>
</template>

<script setup>
import { inject ,defineProps } from "vue";

const tva = inject("tva");
defineProps({
    prix : Number
})

</script>
<style lang=""></style>
