<template>
    <div>
        Tableau[{{ id }}] = {{ numbers[id] }}
    </div>
    <ul>
        <li><router-link :to="{ name: 'tableau', params: { id: next } }">next</router-link></li>
        <li><router-link :to="{ name: 'tableau', params: { id: previous } }">previous</router-link></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            numbers: [2, 3, 8, 1]
        }
    },
    props: {
        id: Number
    },
    computed: {
        next() {
            return (Number(this.id) + 1) % this.numbers.length
        },
        previous() {
            return this.id != 0 ? Number(this.id) - 1 : this.numbers.length - 1
        }
    }

}
</script>
