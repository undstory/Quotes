export default {

    quotes(state) {
        return state.quotes,
    },
    

    giveMeQuote(state) {
        return state.quotes.filter(quote => quote.id === 1);
    }
      
}