<script setup>
import { ref, onMounted, computed } from 'vue';
const value1 = ref(0)
const value2 = ref(0)

onMounted(() => {
    setInterval(
        () => value1.value += 1,
        2000
    )
})

const resultat = computed(() => value1.value + value2.value)

</script>

<template>
    <p>{{ value1 }} + {{ value2 }} = {{ resultat }}</p>
</template>