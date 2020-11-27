<template>
    <div class="w-full h-screen bg-gray-600 text-gray-100">
        <h2 class="text-center"></h2>
        <div>{{ randomQuote }}</div>
    </div>
</template>

<script>


export default ({
    name: "Random",
    computed: {
       
    randomQuote() {
        return this.$store.getters.giveMeQuote;
    }
    
    }
});
</script>