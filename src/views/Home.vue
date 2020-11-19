<template>
    <div class="home xl:container mx-auto">
        <!-- <div class="flex flex-row w-4/5 container border-2 items-center justify-center">
            <div class="hello w-1/2 border self-end text-right">Hello!</div>
            <div class="flex w-1/2 flex-col">
                <span class="quotes w-full">Quotes</span>
                <span class="all">App</span>
            </div>
        </div>   -->
        <img src="../assets/slice1.png" class="mx-auto py-24 px-16 text-center" />
        <img src="../assets/slice2.png" class="mx-auto py-24 px-16 text-center" />
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
