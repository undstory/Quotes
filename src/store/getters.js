export default {

    random(state) {
        return state.random;
    },
    quotes(state) {
        return state.quotes;
    },

    computeId(state) {
        return state.quotes.length;
    },

    filteredQuotesAuthor(state) {
        return state.quotes.map(quote => quote.author).sort();
    },

    filteredQuotesCategory(state) {
        return state.quotes.map(quote => quote.category).sort();
    },

    // filteredByAuthor(state, getters) {
    //     return this.filteredQuotesAuthor.value.map()
    // } 

    
}