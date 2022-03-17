<template>
    <nav class="nav-mobile">
        <div class="nav-mobile-links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/pricing">Pricing</router-link>
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
        this.generateLinkArray()
    },        
    methods:
    {
        toggleNav:function(){
        const nav = document.querySelector('.nav-mobile');
        const BurgerMenuLineArray = Array.from(document.querySelectorAll('.line'));
        const body = document.querySelector('body')
        const burgerMenu = document.querySelector('.ham');

        body.classList.toggle('overflow-toggle');
        burgerMenu.classList.toggle('active')
        BurgerMenuLineArray.forEach((btn => btn.classList.toggle('nav-active')));
        nav.classList.toggle('nav-active');
        },
        generateLinkArray: function()
        {
            // Grab all links in nav bar
            const navIcon = document.querySelectorAll(".nav-mobile-links a");
            
            // Convert from Array-like obj to an array
            const linkArray = Array.from(navIcon);

            linkArray.forEach((link) => {
                link.addEventListener('click', this.toggleNav, this);
            });

            return linkArray;
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