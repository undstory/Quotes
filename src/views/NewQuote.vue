<template>
    <div class="w-full h-full bg-gray-600 text-gray-100">
        <div class="flex flex-col justify-center items-center">
            <div>Quote id: {{ computeId + 1}}</div>
            <textarea v-model="quote.text" ref="textarea" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" rows="10" placeholder="Quote..." autofocus="autofocus"></textarea>
            <input v-model="quote.author" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" placeholder="Author..." />
            <button @click="saveNew" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold">Add quote</button>
        </div>
       <!-- <button @click="iCo">I co?</button> -->
    </div>
</template>

<script >





export default ({
    name: 'new-quote',
    data() {
        return {
            input: this.$refs.textarea,
            quote: {
              
            }
        }
    },
    computed: {
       
        quotes() {
             return this.$store.getters.quotes;
        },

        computeId() {
            return this.$store.getters.computeId;
        }

    },
    mounted() {
        this.focusInput();
    },
    methods: {

        saveNew() {
            this.$store.commit("saveQuote", this.quote);
            this.quote.id = this.computeId;
            this.quote = {};
            alert("A new quote has been added to the database");
            console.log(this.quotes);

        },

        focusInput() {
            this.$refs.textarea.focus();
        },
      
    }
    
})
</script>