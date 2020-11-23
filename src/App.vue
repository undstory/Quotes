<template>
  <div class="app w-full bg-gray-600 text-gray-100 h-full">

    <navbar />
    
    <router-view />
  </div>
</template>

<script lang="ts">

import Navbar from "@/components/Navbar.vue";

import Vue from 'vue'
export default Vue.extend({
  name: "App",
  components: {
    Navbar
  }
})
</script>

<style>




</style>
