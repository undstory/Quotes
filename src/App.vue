<template>
  <div class="app h-screen bg-gray-600 text-gray-100">

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
