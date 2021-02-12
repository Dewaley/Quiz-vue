<template>
  <div id="app" class="font-nunito overflow-hidden">
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
