<template>
    <!-- <div class="home h-full w-full bg-gray-600 xl:container"> -->
        <div class="w-full h-full bg-gray-600 text-gray-100">
        <img src="../assets/slice1.png" class="mx-auto pt-24 pb-12 px-16 text-center hidden sm:block" />
        <img src="../assets/slice2.png" class="mx-auto py-12 px-16 text-center sm:hidden"  />
        <h2 class="text-center font-semibold md:text-4xl text-3xl pt-2 px-4 pb-10">What do you want to do?</h2>
        <div class="flex mx-auto flex-col sm:flex-row py-4 w-1/2 justify-between items-center">
            <router-link to="/new" class="border-solid border-4 border-pink-400 py-2 mx-1 my-1 px-4 md:w-2/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold"><button type="button" >New Quote</button></router-link>
            <router-link to="/random" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold"><button type="button">Random Quote</button></router-link>
             <router-link to="/search" class="border-solid border-4 border-pink-400 py-2 mx-1 my-8 px-4 md:w-2/5 w-3/5 text-xl text-center hover:bg-pink-400 hover:font-semibold"><button type="button">Search Quote</button></router-link>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
 
};
</script>

<style scoped>
.hello {
    font-size: 10rem;
}

.quotes {
    font-size: 5rem;
    margin: 0;
    padding: 0;
}

.all {
    font-size: 5rem;
    margin: 0;
    padding: 0;
}
</style>
