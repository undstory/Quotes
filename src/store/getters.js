export default {

    findRandom: state => {
        const random = Math.floor(Math.random()*state.quotes.length);
        return state.quotes[random];
    }

    
}