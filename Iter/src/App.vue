<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    <div id="nav">
      <nav
        class="
          bg-white
          border-gray-200
          px-2
          sm:px-4
          py-2.5
          dark:bg-gray-800
        "
      >
        <div class="container flex flex-row ">
          <a href="#" class="flex">
            <span
              class="
                self-center
                text-lg
                font-semibold
                whitespace-nowrap
                dark:text-white
              "
              >Iter</span
            >
            <router-link
              class="
                text-slate-300
                self-center
                font-semibold
                whitespace-nowrap
                px-4
      
                py-2.5
                dark:text-white
              "
              to="/"
              >Anew Journey</router-link
            >
          </a>
        </div>
      </nav>
      <router-link to="/About">About</router-link>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {

}
</style>
