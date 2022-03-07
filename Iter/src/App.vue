<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class>
    <div id="nav">
      <nav class="py-2.5 mix-blend-normal">
        <div class="flex space-x-4 justify-center">
          <img class="" src="https://img.icons8.com/windows/64/000000/phoenix-framework.png"/>
          <a href="#" class=" self-center text-lg font-semibold whitespace-nowrap dark:text-white">
           
            <router-link
              class="text-black text-left whitespace-nowrap hover:underline font-sans text-2xl"
              to="/"
            >Iter</router-link>
            
          </a>
          <span class="flex justify-center py-2.5 ">
              <router-link class="routerLink" to="/About">What is Iter?</router-link>
              <!-- Space this out more for login to the left -->
              <router-link class="routerLink" to="#">Logs</router-link>

              <router-link class="routerLink" to="#">Login</router-link>
            </span>
          <span class=" align-middle">
            
          </span>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
.routerLink {
  @apply   text-black  text-center whitespace-nowrap px-4 py-2.5 hover:underline font-sans text-2xl;
}

body {
  color: black;
}
</style>
