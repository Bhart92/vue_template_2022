<template>
    <nav class="nav-mobile">
        <div class="nav-mobile-links">
            <router-link @click="toggleNav" to="/">Home</router-link>
            <router-link @click="toggleNav" to="/about">About</router-link>
            <router-link @click="toggleNav" to="/services">Services</router-link>
            <router-link @click="toggleNav" to="/pricing">Pricing</router-link>
        </div>
    </nav>
</template>
<script>
window.__forceSmoothScrollPolyfill__ = true;

export default {
    mounted()
    {
    },        
    methods:
    {
        toggleNav:function(){
            const nav = document.querySelector('.nav-mobile');
            const overlay = document.querySelector('.overlay');
            const BurgerMenuLineArray = Array.from(document.querySelectorAll('.line'));
            const htmlTag = document.querySelector('html')
            const section = document.querySelector('section');
            const burgerMenu = document.querySelector('.ham');

            htmlTag.classList.toggle('overflow-toggle');
            section.classList.toggle('overflow-toggle');
            overlay.classList.toggle('display-toggle');
            burgerMenu.classList.toggle('active')
            BurgerMenuLineArray.forEach((btn => btn.classList.toggle('nav-active')));
            nav.classList.toggle('nav-active');
        },
        // Controls section scrolling
        sectionScroller: function(target) {
            
            const body = document.querySelector("body");
            
            // scroll to top of section
            window.scroll({
                top: body,
                behavior: 'smooth'
                });
        }
    }
}
</script>