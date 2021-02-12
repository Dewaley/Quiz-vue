<template>
  <div class="w-screen flex justify-center items-center">
    <div class="text-center w-2/5 bg-gray-300 p-5">
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
export default {
  name: 'QuestionContainer',
  props: {},
}
</script>
