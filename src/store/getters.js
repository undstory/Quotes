export default {

    // findRandom: state => {
    //     const random = Math.floor(Math.random()*state.quotes.length+1);
    //     // const currentQuote = state.quotes[random];
    //     // console.log(currentQuote);
    //     // return currentQuote;
    //     return random;
    // },
    
    random(state) {
        return state.random;
    },
    quotes(state) {
        return state.quotes;
    },

    computeId(state) {
        return state.quotes.length;
    }

    
}