<template>
  <section class="services-container">
    <div class=" services-module">
      <div class="background-container" />
      <h1>What makes<br>our sites better?</h1>
    </div>
   <div class="services-card-container">
    <ServiceCard :image="'seo.png'" :title="'Optimization'"
      :subText="'Our websites are optimized to perform. Fast load times, SEO, semantic tagging, and a mobile first approach ensure we stay on top of every search engine.'"
    />

    <ServiceCard :image="'mobile-first.png'" :title="'Mobile-First Approach'"
      :subText="`Nearly 60% of all internet traffic comes from mobile devices. However, some website builders dont't take a mobile first approach. Resulting in A web page with subpar load times, Google rankings, and unoptimized mobile designs.`"
    />

    <ServiceCard :image="'responsive.png'" :title="'Fully Responsive'"
      :subText="'Responsive design means your website resizes according to the screen it is viewed on. By ensuring our projects are fully responsive we maximize each clients Google rankings.'"
    />
   </div>

   <ServiceAbout :title="'What does this mean for our clients?'"
    :subText="`Better Google rankings, more visitors, and bigger revenues as a result. Proper optimization can signficantly increase a website's exposure which in turn can in more business.`"
    />
  </section>
</template>

<script>
import ServiceAbout from '../components/services/ServiceAbout.vue';
import ServiceCard from '../components/services/ServiceCard.vue';
// @ is an alias to /src

export default {
  name: "ServiceView",
  components: {ServiceCard, ServiceAbout}
};
</script>
