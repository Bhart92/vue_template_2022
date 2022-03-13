<template>
  <section class="landing-container">
    <div class="landing-hero">
      <h1>Web Development<br>+ Design</h1>
      <h2>Hand coded, custom websites,<br>optimized for you.</h2>
      <button class="landing-btn btn">Pricing</button>
    </div>
    <img class="landing-mockup" src="../assets/landing-mockup.svg" alt="Image of three devices: an Iphone, Macbook Pro, and Ipad displaying the same website with optimized layouts for each device." />
  </section>
    <AboutView />
    <ServiceView />
    <PricingView />
</template>

<script>
import AboutView from "./AboutView";
import ServiceView from "./ServiceView";
import PricingView from "./PricingView";
// @ is an alias to /src

export default {
  name: "LandingView",
  components: { AboutView, ServiceView, PricingView }
};
</script>
