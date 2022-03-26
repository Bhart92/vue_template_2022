<template>

    <NavOverlay />
    <NavBar v-if="isDesktop"/>
    <MobileNav v-else />
  <router-view />
  
</template>

<script>
import NavBar from "./components/NavBar/NavBar";
import NavOverlay from "./components/base/NavOverlay";
import MobileNav from "./components/NavBar/MobileNav";
import { isMobile, isTablet} from 'mobile-device-detect';

export default {
  name: "App",
  components: { NavBar, MobileNav, NavOverlay },
  data(){
    return {
      isDesktop: (!isMobile && !isTablet)
    }
  },
};
</script>
