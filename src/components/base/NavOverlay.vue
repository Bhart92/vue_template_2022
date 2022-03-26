<template>
    <div class="overlay" @click="toggleNav"/>
</template>
<script>
export default {
   methods: {
       
    toggleNav(){
        const nav = document.querySelector('.nav-mobile');
        const overlay = document.querySelector('.overlay');
        const BurgerMenuLineArray = Array.from(document.querySelectorAll('.line'));
        const htmlTag = document.querySelector('html')
        const section = document.querySelector('section')
        const burgerMenu = document.querySelector('.ham');

        if(nav.classList.contains('nav-active')){
            htmlTag.classList.toggle('overflow-toggle');
            section.classList.toggle('overflow-toggle');
            overlay.classList.remove('display-toggle');
            burgerMenu.classList.toggle('active')
            BurgerMenuLineArray.forEach((btn => btn.classList.toggle('nav-active')));
            nav.classList.toggle('nav-active');
        }
        return;
      
    }
   } 
}
</script>