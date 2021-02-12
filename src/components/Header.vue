<template>
  <div>
    <ul class="flex justify-between p-4 border-b-2 ">
      <li>Quiz App</li>
      <li>Counter: {{ numCorrect }}/{{ numTotal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['numCorrect', 'numTotal'],
}
</script>
