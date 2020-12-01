<template>
    <div class="w-full h-screen bg-gray-600 text-3xl text-white-100 text-center">
      
        <!-- <div v-for="quote in quotes" v-bind:key="quote.id">{{ quote.price }}</div> -->
        <div class="px-2 pt-10 pb-5 w-1/2 text-center m-auto">"{{ findRandom.text }}"</div>
        <div class="px-2 py-3 text-2xl">{{ findRandom.author }}</div>
        <button type="button" @click="ile" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 w-1/5 text-xl text-center hover:bg-pink-400 hover:font-semibold">Give Me Another One</button>
    </div>
</template>

<script>



export default ({
    name: "Random",
    computed: {
       
         quotes() {
             return this.$store.getters.quotes;
        },
    
        findRandom: state => {
            const random = Math.floor(Math.random()*state.quotes.length+1);
           return state.quotes[random];
    
    },

        giveMeRandom() {
            console.log(this.findRandom);
            return this.findRandom;
        }

    
    },
    methods: {
        ile() {
    
            console.log(this.quotes);
            return this.findRandom;
        }

      
    }
});
</script>