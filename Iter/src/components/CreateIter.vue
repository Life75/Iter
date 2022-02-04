<template>
  <div id="createIter">
    <h1 class="text-4xl text-center font-semibold py-5">
      Time to design your Iter
    </h1>
    <label class="" for="fname">Name of your Iter</label>
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      id="username"
      type="text"
      placeholder="Title of your Journey..."
      v-model="getTitle"
    />
    <button class="border" type="button" @click='onSave()'>Create your Iter</button>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const getTitle = ref('');



function onSave() {
  console.log(getTitle.value);
  
  //Create db and storage management  
}

</script>

<style scoped>

</style>