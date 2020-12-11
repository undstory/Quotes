<template>
    <div class="w-full h-screen bg-gray-600 text-3xl text-white-100 text-center">
        <div class="px-2 pt-10 pb-5 w-3/4 mt-8 text-center  md:text-3xl sm:text-2xl text-xl m-auto">"{{ findRandom.text }}"</div>
        <div class="px-2 py-3 md:text-2xl text-xl"><span class="author">{{ findRandom.author }}</span></div>
        <button type="button" @click="fresh" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 sm:w-1/3 w-1/2 text-xl text-center hover:bg-pink-400 hover:font-semibold">Give Me Another One</button>
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
            const random = Math.floor(Math.random()*state.quotes.length);
            console.log(state.quotes.length);
            return state.quotes[random];
        }
    },
    methods: {
        fresh() {
            location.reload();
        }
    }
});
</script>

<style>

.author {
    position: relative;
   z-index: 555;
}

.author::after {
    content: " ";
    border-bottom: 10px solid rgb(96, 165, 250);
    position: absolute;
    width: 100%;
    bottom: 3px;
    left: 0;
    z-index: -1;
}
</style>