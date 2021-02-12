<template>
  <div class="w-screen flex justify-center items-center">
    <div class="text-center w-2/5 bg-gray-300 p-5 md:w-2/4 sm:w-">
      <div class="p-1 border-b-2 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui
        blanditiis adipisci hic possimus assumenda molestiae tempora nisi
        voluptates voluptatem?
      </div>
      <div class="p-4">
        <div class="bg-white p-2 border border-gray-300">
          I want a dog
        </div>
        <div class="bg-white p-2 border border-gray-300">
          I want a dog
        </div>
        <div class="bg-white p-2 border border-gray-300">
          I want a dog
        </div>
        <div class="bg-white p-2 border border-gray-300">
          I want a dog
        </div>
      </div>
      <div>
        <button class="text-white bg-indigo-400 p-1 rounded focus:outline-none mx-1">Submit</button>
        <button class="bg-green-500 text-white p-1 rounded focus:outline-none mx-1">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

export default {
  name: 'QuestionContainer',
  props: {},
  data() {
   return {
    questions: []
   }
  },
  mounted: function() {
   Vue.axios.get('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple')
   .then((res)=> {
    this.questions=res.data.results
    console.log(this.questions);
   })
  }
}
</script>
