<template>
  <div id="app">
    <Header />
    <QuestionContainer />
  </div>
</template>

<script>
import Header from './components/Header'
import QuestionContainer from './components/QuestionContainer'

export default {
  name: 'App',
  components: {
    Header,
    QuestionContainer,
  },
}
</script>
