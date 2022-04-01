<template>
  <transition @enter="enter" @before-enter="beforeEnter" @leave="leave" appear tag="div">
      <FailRotated v-if="isRotated" />
  </transition>
    <NavOverlay />
    <NavBar v-if="isDesktop"/>
    <MobileNav v-else />
  <router-view />
  
</template>

<script>
import {mapGetters} from "vuex";
import FailRotated from "./components/modules/FailRotated";
import NavBar from "./components/NavBar/NavBar";
import NavOverlay from "./components/base/NavOverlay";
import { toggleNav, overflowToggle } from "./js/NavFunctions";
import MobileNav from "./components/NavBar/MobileNav";
import { isMobile, isTablet} from 'mobile-device-detect';

export default {
  name: "App",
  components: { FailRotated, NavBar, MobileNav, NavOverlay },
  data(){
    return {
      isDesktop: (!isMobile && !isTablet)
    }
  },
  methods: {
    beforeEnter(el){
      const nav = document.querySelector('nav');
      if(nav.classList.contains('nav-active')) toggleNav();

      el.style.opacity = 0;
    },
    enter(el){
      el.style.opacity = 1;
    },
    leave(el){
      el.style.opacity = 0;
      overflowToggle();
    }
  },
  computed: {
    ...mapGetters({
      isRotated: "getIsRotated",
    }),
  }
};
</script>
