<template>
   
        <div class="xl:container mx-auto flex justify-between items-center">
            <h1 class="logo py-12 px-8 font-semibold text-3xl ssm:hidden tracking-wider"><router-link to="/">Quotes</router-link></h1>
            <h1 class="logo-min py-12 px-8 font-bold text-5xl ssm:block tracking-wider hidden">Q</h1>
            <div class="navbar py-12 px-8" >
            <input type="checkbox" id="hamburger-toggle">
            <label for="hamburger-toggle" class="hamburger-wrapper">
                <span class="hamburger bg-gray-100"></span>
            </label>

            <nav class="nav bg-pink-400">
                <ul class="nav-list">
                    <li><a href="#"> <router-link to="/">Home</router-link></a></li>
                    <li><a href="#"> <router-link to="/random">Random Quote</router-link></a></li>
                    <li><a href="#"><router-link to="/search">Search Quote</router-link></a></li>
                    <li><a href="#"><router-link to="/new">New Quote*</router-link></a></li>
                    <li><a href="#"><router-link to="/about">About</router-link></a></li>
                </ul>
            </nav>
        </div>
        </div>
     

</template>

<script>


export default ({
  name: "Navbar",
  
});
</script>

<style>
.navbar {
    position: relative;
}

#hamburger-toggle {
    display: none;
}

.hamburger-wrapper {
    cursor: pointer;
    z-index: 1222;
}

.hamburger, .hamburger::before, .hamburger::after {
    display: inline-block;
    width: 2.5rem;
    height: .4rem;
    background-color: #f7fafc;
    transition: all .3s;
}

.hamburger {
    position: relative;
}

.hamburger::before, .hamburger::after {
    content: "";
    position: absolute;
}

.hamburger::before {
    transform: translateY(-1rem); 
}

.hamburger::after {
    transform: translateY(1rem);
}

.nav {
    position: absolute;
    top: -2rem;
    right: 0;
    width: 50rem;
    height: 100vh;
    clip-path: circle(0 at 100% 0);
    transition: all .5s;
    z-index: 0;
}

.nav-list {
    position: absolute;
    list-style: none;
    right: 3rem;
    top: 1rem;
    opacity: 0;
    padding-top: 6rem;
}

.nav-list li {
    margin: 2rem 0;
    text-align: right;
}

.nav-list li a {
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
    padding: 1rem;
    transition: all .3s;
}

.nav-list li a:hover {
    font-weight: bold;
}

#hamburger-toggle:checked ~ .hamburger-wrapper .hamburger {
    background-color: transparent;
    z-index: 12222;
}

#hamburger-toggle:checked ~ .hamburger-wrapper .hamburger::before {
    transform: rotate(225deg);
    background-color: #fff;
}

#hamburger-toggle:checked ~ .hamburger-wrapper .hamburger::after {
    transform: rotate(-225deg);
    background-color: #fff;
}

#hamburger-toggle:checked ~ .nav {
    clip-path: circle(500px at 100% 0);
}

#hamburger-toggle:checked ~ .nav .nav-list {
    transform: translateX(0);
    opacity: 1;
}


</style>
