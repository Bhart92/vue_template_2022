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
import {toggleNav} from '../../js/NavFunctions';

export default {
    methods:
    {
        toggleNav,
    }
}
</script>