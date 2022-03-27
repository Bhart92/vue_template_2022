<template>
    <div class="overlay" @click="toggleNav"/>
</template>
<script>
import { toggleNav } from '../../js/NavFunctions';
export default {
   methods: {
    toggleNav
   } 
}
</script>