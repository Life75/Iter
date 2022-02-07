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
      v-model="title"
    />
    <div class="my-4">
      <label class="my-4" for="intent">Intent of your Iter</label>
      <input
        class=" border rounded w-full py-2 px-3"
        type="text"
        placeholder="Intent of this journey "
      />
    </div>

    <div class="flex justify-center">
      <button
        class="border rounded px-5 py-4 my-5 hover:bg-orange-500"
        type="button"
        @click="onSave()"
      >
        Create your Iter
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const title = ref("");
const description = ref("");

function onSave() {
  console.log(title.value);

  //Create db and storage management
}
</script>

<style scoped>
</style>