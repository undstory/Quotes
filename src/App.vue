<template>
  <div class="app h-full bg-gray-600 text-gray-100">

    <navbar />

      <router-view />
  
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";


export default ({
  name: "App",
  components: {
    Navbar
  }
})
</script>

<style>






</style>
