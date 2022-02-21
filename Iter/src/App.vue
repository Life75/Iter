<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class>
    <div id="nav">
      <nav class="py-2.5 mix-blend-normal">
        <div class="container flex">
          <a href="#" class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            <router-link
              class="text-black text-left whitespace-nowrap mx-20 hover:underline font-sans text-2xl"
              to="/"
            >Iter</router-link>
            <span class="mr-10">
              <router-link class="routerLink" to="/About">What is Iter?</router-link>
              <!-- Space this out more for login to the left -->
              <router-link class="routerLink" to="#">Login</router-link>
            </span>
          </a>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
.routerLink {
  @apply   text-black text-center whitespace-nowrap px-4 py-2.5 hover:underline font-sans text-2xl;
}

body {
  color: black;
}
</style>
