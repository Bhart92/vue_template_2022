<template>
  <section class="portfolio-container">

   <div class="portfolio-title">
    <h1>Some of our works...</h1>
   </div>

   <div class="portfolio-module">
       <PortfolioItem :title="'Portfolio Title'" :subText="'Portfolio Desc'" :image="'landing-mockup.svg'"/>
       <PortfolioItem :title="'Portfolio Title'" :subText="'Portfolio Desc'" :image="'landing-mockup.svg'"/>
       <PortfolioItem :title="'Portfolio Title'" :subText="'Portfolio Desc'" :image="'landing-mockup.svg'"/>
       
   </div>

  </section>
</template>
<script>
import PortfolioItem from '../components/portfolio/PortfolioItem.vue';
export default {
    components: { PortfolioItem }
}
</script>
