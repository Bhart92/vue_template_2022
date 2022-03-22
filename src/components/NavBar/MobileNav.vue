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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    mounted()
    {
        // this.generateLinkArray()
    },        
    methods:
    {
        toggleNav:function(){
        const nav = document.querySelector('.nav-mobile');
        const BurgerMenuLineArray = Array.from(document.querySelectorAll('.line'));
        const body = document.querySelector('body')
        const burgerMenu = document.querySelector('.ham');
        console.log(burgerMenu)
        console.log('fired')

        body.classList.toggle('overflow-toggle');
        burgerMenu.classList.toggle('active')
        BurgerMenuLineArray.forEach((btn => btn.classList.toggle('nav-active')));
        nav.classList.toggle('nav-active');
        },
        // Controls section scrolling
        sectionScroller: function(target) {
            
            const body = document.querySelector("body");
            
    //   body.classList.toggle('overflow-toggle');
            // Grab link associated with section
            const link = document.querySelector(`.${target}`);

            // Pull href attribute
            const href = link.getAttribute("href");
            // Find the top of the section
            const offsetTop = document.querySelector(`${href}`).offsetTop + 15;
            // scroll to top of section
            window.scroll({
                top: body,
                behavior: 'smooth'
                });
        }
    }
}
</script>