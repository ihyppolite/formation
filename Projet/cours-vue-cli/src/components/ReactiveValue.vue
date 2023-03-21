<script>
import { computed,  } from 'vue';

export default {
  name: "ReactiveValue",
  data() {
    return {
      value1: 0,
      value2: 0,
      resultat: 0,
    };
  },
  created() {
        // watchEffect(() => {
        //     this.value3 = this.value1 + this.value2;
        // })
        this.resultat = computed(()=>this.value1 + this.value2)
    
  },
  mounted() {
    setInterval(() => (this.value1 += 1), 2000);
  },
};
</script>

<template>
  <p>{{ value1 }} + {{ value2 }} = {{ resultat }}</p>
</template>
