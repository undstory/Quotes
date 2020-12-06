<template>
    <div class="w-full h-screen bg-gray-600 text-3xl text-white-100 text-center">
        <h2>Search for quote by</h2>
        <div class="container flex mx-auto flex-col sm:flex-row py-4 w-1/2 justify-between items-center">
            
            <select class="bg-transparent border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold" name="Author" id="Author">
                <option class="bg-gray-600 text-white-100">Author:</option>
                <option class="bg-gray-600 text-white-100" v-for="author in filteredQuotesAuthor" v-bind:key="author"  :value="author">{{ author }}</option>
            </select>


            <select class="bg-transparent border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold" name="" id="">
                <option class="bg-gray-600 text-white-100">Category:</option>
                <option class="bg-gray-600 text-white-100" v-for="category in filteredQuotesCategory" v-bind:key="category">{{ category }}</option>
        </select>
        </div>

    <div>
        <ul>Tu wyświetl:
            <li></li>

        </ul>
    </div>
        
    </div>
</template>

<script>
export default {
    name: 'search',
    computed: {
    
        filteredQuotesAuthor() {
            return [... new Set(this.$store.getters.filteredQuotesAuthor)];
        },

         filteredQuotesCategory() {
            return [...new Set(this.$store.getters.filteredQuotesCategory)];
        },

    
    }
}
</script>