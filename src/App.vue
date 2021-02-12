<template>
  <div id="app" class="font-nunito overflow-hidden">
    <Header />
    <QuestionContainer
      :currentQuestion="questions[index]"
      :next="next"
      v-if="questions.length"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import QuestionContainer from './components/QuestionContainer'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: 'App',
  components: {
    Header,
    QuestionContainer,
  },
  data() {
    return {
      questions: [],
      index: 0,
    }
  },
  methods: {
    next() {
      this.index++
    },
  },
  mounted() {
    Vue.axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple'
      )
      .then((res) => {
        this.questions = res.data.results
        console.log(this.questions)
      })
  },
}
</script>
