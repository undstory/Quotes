<template>
    <div class="w-full h-full bg-gray-600 text-gray-100">
        <div class="flex flex-col justify-center items-center">
            <div class="display">Quote id: {{ computeId + 1}}</div>
   
            <textarea v-model="quote.text" ref="textarea" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" rows="10" placeholder="Quote..." autofocus="autofocus"></textarea>
            <p v-if="$v.quote.text.$dirty && !$v.quote.text.required">This field is required</p>
            <p v-if="$v.quote.text.$dirty && !$v.quote.text.maxLength">The message requires less than 500 characters</p>
            <select @change="category($event.target.value)" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800" >
                <option class="text-gray-300" selected>Category...</option>
                <option v-for="c in filteredQuotesCategory" :value="c" v-bind:key="c" required>{{ c }}</option>
            </select>
            <p v-if="$v.quote.category.$dirty && !$v.quote.category.required">This field is required</p>
            <input v-model="quote.author" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" placeholder="Author..." />
            <p v-if="$v.quote.author.$dirty && !$v.quote.author.required">This field is required</p>
            <button @click="saveNew" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold">Add quote</button>
        </div>
       <!-- <button @click="iCo">I co?</button> -->
    </div>
</template>

<script >

import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

export default ({
    name: 'new-quote',
    mixins: [validationMixin],
    data() {
        return {
            input: this.$refs.textarea,
            quote: {
                text: '',
                category: '',
                author: ''
            }
        }
    },
     validations: {
         quote: {
             text: { required, maxLength: maxLength(500) },
             category: { required },
             author: { required }
         }
     },
    computed: {
       
        quotes() {
             return this.$store.getters.quotes;
        },

        computeId() {
            return this.$store.getters.computeId;
        },

        filteredQuotesCategory() {
            return [...new Set(this.$store.getters.filteredQuotesCategory)];
        },

      
      

    },
    mounted() {
        this.focusInput();
    },
    methods: {

        category(category) {
            this.quote.category = category;
        },

       

        saveNew() {
            this.$v.$touch()
            if(this.$v.$invalid) {
                
                alert("Please fill the form correctly.")
            } else {
                this.$store.commit("saveQuote", this.quote);
                this.quote.id = this.computeId;     
            
          
                console.log(this.quotes);
                alert("If you're an admin, this page is for you...")
                alert("Sending");
                setTimeout(() => {
                    alert("A new quote has been added to the database");
                }, 500);
                 
            }
                this.quote = {};
            

                 
               
           
           
        },

        focusInput() {
            this.$refs.textarea.focus();
        },

      
      
    }
    
})
</script>

<style>

.display {
    display: none;
}

</style>