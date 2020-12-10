<template>
    <div class="about w-full h-full bg-gray-600 text-gray-200 flex mt-3 justify-center items-center">
        <p class="about__me w-1/3 text-2xl leading-normal p-1">I'm Poland based freelance front-end developer.
                    I am passionate about art, especially in the areas of graphics, illustration and photography.
                    I work as a front-end developer, especially with the Vue.js framework.<br />
                    However, my greatest love is illustration in the collage technique. <br/>
                    I love looking for interesting combinations of colors and forms - 
                    it opens the mind to other directions of artistic measures.</p>
        <img class="about__img w-1/5 p-1" src="../assets/ja.png">
    </div>
</template>

<script>


export default ({
  name: "About",
  
});
</script>

<style>

.about {
    &__img {
        width: 2rem;
        height: 2rem;
    }
}




</style>
