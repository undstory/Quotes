<template>
    <div class="w-full h-screen bg-gray-600 text-3xl text-white-100 text-center">
      
        <!-- <div v-for="quote in quotes" v-bind:key="quote.id">{{ quote.price }}</div> -->
        <div class="px-2 pt-10 pb-5">{{ giveMeRandom.text }}</div>
        <div class="px-2 py-3 text-2xl">{{giveMeRandom.author }}</div>
        <button type="button" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 w-1/5 text-xl text-center hover:bg-pink-400 hover:font-semibold">Give Me Another One</button>
    </div>
</template>

<script>

import {   mapGetters } from 'vuex'

export default ({
    name: "Random",
    computed: {
        // ...mapState(["quotes"]),
        ...mapGetters(["findRandom"]),
        giveMeRandom() {
            console.log(this.findRandom);
            return this.findRandom;
        }
    
    }
});
</script>