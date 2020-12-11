<template >
    <div class="w-full h-full bg-gray-600 md:text-3xl text-white-100 text-center pb-2">
        <h2 class="text-xl sm:text-2xl md:text-3xl">Search for quote by</h2>
        <div class="container flex mx-auto flex-col sm:flex-row md:w-1/2  py-4 justify-between items-center">
            
            <select @change="giveMeTheAuthor($event.target.value)" class="bg-transparent border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/2 sm:w-3/4 w-2/3 text-xl text-center hover:bg-pink-400 hover:font-semibold" name="Author" id="Author">
                <option class="bg-gray-600 text-white-100">Author:</option>
                <option class="bg-gray-600 text-white-100" v-for="a in filteredQuotesAuthor" v-bind:key="a"  :value="a">{{ a }}</option>
            </select>


            <select @change="giveMeTheCategory($event.target.value)" class="bg-transparent border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/2 sm:w-3/4 w-2/3 text-xl text-center hover:bg-pink-400 hover:font-semibold" name="" id="">
                <option class="bg-gray-600 text-white-100">Category:</option>
                <option class="bg-gray-600 text-white-100" v-for="c in filteredQuotesCategory" :value="c" v-bind:key="c" >{{ c }}</option>
        </select>
        </div>

    <div>
        <ul>
            <li v-for="(quote, index) in newQuotesByCategory" v-bind:key="index" class="my-8">
                <span class="result my-4 md:text-3xl sm:text-2xl text-xl w-3/4">"{{ quote.text }}"</span><br />
                <span class="result my-4 md:text-2xl sm:text-xl text-lg author">{{ quote.author }}</span><br />
            </li>
        </ul>
    </div>

    <div>
        <ul>
            <li v-for="(quote, index) in newQuotesByAuthor" v-bind:key="index" class="my-8">
                <span class="result my-4 md:text-3xl sm:text-2xl text-xl w-3/4">"{{ quote.text }}"</span><br />
                <span class="result my-4 md:text-3xl sm:text-2xl text-lg author">{{ quote.author }}</span><br />
            </li>
        </ul>
    </div>
  
        
    </div>
</template>

<script>

export default {
    name: 'search',
    data() {
        return {
                newQuotesByCategory: [],
                newQuotesByAuthor: []
        }
    },
    computed: {
    
        filteredQuotesAuthor() {
            return [... new Set(this.$store.getters.filteredQuotesAuthor)];
        },

        filteredQuotesCategory() {
            return [...new Set(this.$store.getters.filteredQuotesCategory)];
        },

        quotes() {
             return this.$store.getters.quotes;
        }
    },

    methods: {

        giveMeTheCategory(category) {
             
            this.newQuotesByCategory = this.quotes.filter(function(quote) {
                return quote.category == category;
            })

            return this.newQuotesByCategory;
       },

       giveMeTheAuthor(author) {

            this.newQuotesByAuthor = this.quotes.filter(function(quote) {
                return quote.author == author; 
            })

            return this.newQuotesByAuthor;
       }
    }
}
</script>

<style scoped>

.result {
    display: inline-block;
}
</style>