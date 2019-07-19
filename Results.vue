<!--
Things to add on (+ fix looks along the way)
1) Fix image problem
2) Go to seperate page for results w/ close race examples (VA State House 2017/ Harmon)
3) "How This Is Calculated Page"
4) Log-Ins
5) Shareable Stuff
 -->

<template> <!-- HTML -->
  <header id="app">
      <div>
          <p>TEST {{retTotal}}</p>
      </div>
  </header>
</template>

<!-- JavaScript -->
<script>
import Vue from "vue";
import { print } from "util";

export default Vue.extend({
  name: 'app',
  data(){
    return {
        retTotal: 100
    }
  },
  computed:{
      total:function() {
          this.retTotal = 100
          return retTotal
      }
  }
});

</script>

<!-- CSS -->
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>