<template>
  <div class="w-screen flex justify-center items-center">
    <div
      class="text-center w-2/5 bg-gray-300 p-5 md:w-9/12 lg:w-7/12 sm:w-screen"
    >
      <div class="p-1 border-b-2 text-xl">
        {{ currentQuestion.question }}
      </div>
      <div class="m-4">
        <div
          class="bg-white p-2 border border-gray-300 cursor-pointer hover:bg-gray-400"
          v-for="(answer, index) in answers"
          :key="index"
          @click="selectedanswer(index)"
        >
          {{ answer }}
        </div>
      </div>
      <div>
        <button
          class="text-white bg-indigo-400 p-1 rounded focus:outline-none mx-1"
        >
          Submit
        </button>
        <button
          class="bg-green-500 text-white p-1 rounded focus:outline-none mx-1"
          @click="next"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionContainer',
  data(){
   return {
    selectedindex: null
   }
  },
  props: {
    currentQuestion: Object,
    next: Function,
  },
  methods: {
   selectedanswer(index) {
    this.selectedindex = index
   }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      console.log(answers)
      return answers
    },
  },
}
</script>
