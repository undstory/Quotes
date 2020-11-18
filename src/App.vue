<template>
  <div class="app w-full bg-gray-600 text-gray-100 h-screen">

    <navbar />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Random">Random</router-link>
      <router-link to="/about">About</router-link>
    </div>
    
    <router-view /> -->
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
