<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="">
    <div id="nav">
      <nav
        class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-orange-500 mix-blend-normal "
      >
        <div class="container flex flex-row">
          <a
            href="#"
            class="
              self-center
              text-lg
              font-semibold
              whitespace-nowrap
              dark:text-white
            "
          >

            <router-link class="hover:text-orange-500 text-lg font-semibold text-slate-100 dark:text-white text-center" to="/">Iter</router-link>
            <router-link
              class="
                text-slate-300 text-center
                whitespace-nowrap
                px-4
                py-2.5
                dark:text-white
                hover:text-orange-500
              "
              to="/About"
              >What is Iter?</router-link
            >
            <!-- Space this out more for login to the left -->
            <router-link class="text-left" to="#">Login</router-link>
          </a>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>

body {
  color:black
}
</style>
