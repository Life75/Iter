<template>
  <div id="createIter" class=" ">
    <h1 class="text-4xl text-center font-semibold py-5 dark:text-white ">Time to design your Iter</h1>
    <span class>
      <label
        v-if="!magic_flag"
        class="labelStyling"
        for="nameOfIter"
      >Name of your Iter</label>
      <label
        v-if="magic_flag"
        class="flex justify-center text-orange-500 text-lg font-semibold dark:text-orange-500"
        for="nameOfIter"
      >Name of your Iter</label>
      <span class="centerInput">
        <input
          class="border rounded w-26 py-2 px-3 text-gray-700 flex self-center focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          @focus="magic_flag = true"
          placeholder="Title of your Journey..."
          v-model="iter.title"
        />
      </span>
    </span>
    <div class="">
      <label class="labelStyling" for="intent">Intent of this Iter</label>
      <span class="centerInput">
        <input
          class="border rounded w-26 py-2 px-3 text-gray-700 flex self-center focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Intent of this journey "
          v-model="iter.intent"
        />
      </span>
    </div>

    <div class="flex items-center justify-center">
  <div class="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
    <label for="floatingInput" class="text-gray-700"></label>
  </div>
</div>

    <div class="flex justify-center">
      <button
        class="  text-white text-lg font-mono border rounded px-5 py-4 my-5 "
        type="button"
        @click="onSave()"
      >Create your Iter</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IIter } from "../interfaces/IIter";
import { ITimeline } from "../interfaces/ITimeline";

var timeline: ITimeline = {
startDate: undefined,
endDate: undefined
}

var iter: IIter = {
id: "",
title: "",
intent: "",
difficulty: 0,
timeline: timeline,
tags: [],
image: ""
}




var magic_flag = false;

function onSave() {
  console.log(iter.title);
  console.log(iter.intent);
  //
  //Create db and storage management
}
</script>

<style scoped>
.centerInput {
  @apply flex flex-col justify-center my-5;
}

.labelStyling {
  @apply flex justify-center text-lg font-semibold dark:text-white font-sans
}


</style>