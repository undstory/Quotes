<template>
    <div class="w-full h-full bg-gray-600 text-gray-100">
        <div class="flex flex-col justify-center items-center">
            <textarea ref="textarea" class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" rows="10" placeholder="Quote..." autofocus="autofocus"></textarea>
            <input class="border-solid border-4 border-blue-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-gray-800 placeholder-gray-500" placeholder="Author..." />
            <button  class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-1/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold">Add quote</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'new-quote',
    data() {
        return {
            input: this.$refs.textarea,
        }
    },
    mounted() {
        this.focusInput();
    },
    methods: {
        focusInput() {
            this.$refs.textarea.focus();
        }
    }
    
})
</script>