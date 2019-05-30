<!--
Things to add on (+ fix looks along the way)
1) Fix image problem
2) Click on github logo to go to git repo
3) Go to seperate page for results w/ close race examples (VA State House 2017/ Harmon)
4) "How This Is Calculated Page"
5) Log-Ins
6) Shareable Stuff
 -->

<template> <!-- HTML -->
  <header id="app">
    <div class="nav-bar mt-0"></div>
    <img alt="Vue logo" src="./assets/Your-Voice-Your-Vote.jpg" width="1000" height="200">
    
    <div class="pt-5" id='door_qs'>
      <p>How many doors did you knock on?</p>
      <input class="w-30" type="number" v-model.number="doors">
      <p>Message is: {{ doorReal }}</p>
    </div>
    <div class="pt-5" id='calls_qs'>
      <p>How many phone calls did you send?</p>
      <input class="w-30" type="number" v-model.number="calls">
      <p>Message is: {{ callReal }}</p>
    </div>
    <div class="pt-5" id='letters_qs'>
      <p>How many personalized letters did you send?</p>
      <input class="w-30" type="number" v-model.number="letters">
      <p>Message is: {{ letterReal }}</p>
    </div>
    <div class="pt-5" id='door_qs'>
      <p>How many texts did you send?</p>
      <input class="w-30" type="number" v-model.number="texts">
      <p>Message is: {{ textsReal }}</p>
    </div>
    <div class="pt-5" id='people_qs'>
      <p>How many people did you convince to vote in person outside of previous methods?</p>
      <input class="w-30" type="number" v-model.number="people">
      <p>Message is: {{ peopleReal }}</p>
    </div>

    <div class="pt-5" id='door_qs'>
      <p>Total is: {{ total }}</p>
    </div>
    <div>
      
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
      doors: '',
      doorReal: 0,
      calls: '',
      callReal: 0,
      letters: '',
      letterReal: 0,
      texts: '',
      textsReal: 0,
      people: '',
      peopleReal: 0
    }
  },
  computed:{
    total: function () {
      // `this` points to the vm instance

      if(this.doors === ''){
        this.doors = 0
      }
      this.doorReal = this.doors/14

      if(this.calls === ''){
        this.calls = 0
      }
      this.callReal = this.calls/20

      if(this.letters === ''){
        this.letters = 0
      }
      this.letterReal = this.letters/33

      if(this.texts === ''){
        this.texts = 0
      }
      this.textsReal = this.texts/500

      if(this.people === ''){
        this.people = 0
      }
      this.peopleReal = this.people

      return Math.ceil(this.doorReal + this.callReal + this.letterReal + this.textsReal + this.peopleReal);
    }
  },
  methods: {
    getTotal(doors,calls,letters,texts,people) {
      door = parseInt(doors);
      if(door === NaN){
        door = 0
      }
      call = parseInt(calls)
      if(call === NaN){
        call = 0
      }
      letter = parseInt(letters)
      if(letter === NaN){
        letter = 0
      }
      text = parseInt(text)
      if(text === NaN){
        text = 0
      }

      people = parseInt(people)
      if(people === NaN){
        people = 0
      }
      print(door+call+letter+text+people);
    }
  }

});

</script>

<!-- CSS -->
<style>

#door_qs{
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-bar {
  background: linear-gradient(45deg,rgb(61, 114, 228), rgb(230, 39, 39));
  height: 60px;
  margin-bottom: 15px;
}

</style>
