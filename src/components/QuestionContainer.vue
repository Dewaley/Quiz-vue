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
          id="answer"
          class="bg-white p-2 border border-gray-300 cursor-pointer hover:bg-green-50"
          v-for="(answer, index) in answers"
          :key="index"
          @click="selectedanswer(answer)"
          
        >
          {{ answer }}
        </div>
      </div>
      <div>
        <button
          class="text-white bg-indigo-400 p-1 rounded focus:outline-none mx-1"
          @click="submitAnswer"
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
import _ from 'lodash'

export default {
  name: 'QuestionContainer',
  data() {
    return {
      selectedOption: null,
      correctAnswer: null,
      shuffledAnswers: [],
    }
  },
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedOption = null
        this.correctAnswer = null
        this.shuffleAnswers()
      },
    },
  },
  methods: {
    selectedanswer(answer) {
      this.selectedOption = answer
    },
    submitAnswer() {
      let isCorrect = false
      this.correctAnswer = this.currentQuestion.correct_answer
      if(this.selectedOption == null) {
        alert('Please select an answer')
      }
      if (this.selectedOption === this.correctAnswer) {
        isCorrect = true
        this.next()
      }
      if (this.selectedOption !== this.correctAnswer) {
        this.next()
      }
      this.increment(isCorrect)
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ]
      this.shuffledAnswers = _.shuffle(answers)
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    },
  },
}
</script>
