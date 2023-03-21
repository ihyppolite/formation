<template>
  <div class="hello">
  {{ msg }}
  </div>
  <div>
    Hello
    <slot default="nom"> humain </slot> 
    <slot name="prenom"> </slot> 
    from {{ ville }}
  </div>
  <div>
    <input type="text" v-model="nom" placeholder="nom" ref="firstname">
    <button @click="send">Envoyer au parent</button>
  </div>
 e>
</template>

<script>




export default {
    name: "HelloWorld",
    emits: ["envoyer"],
    data() {
        return {
            msg: "Hello world",
            nom: "",
        };
    },
    props: {
        ville: {
            type: String,
            default: "Paris"
        }
    },
    methods: {
        send() {
            this.$emit("envoyer", this.nom);
        }
    },
    beforeCreate() {
        console.log("before Created");
    },
    created() {
        // console.log('created');
    },
    mounted() {
        // console.log('mounted');
    },
    updated() {
        console.log("updated");
    },
    unmounted() {
        console.log("unmounted");
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
