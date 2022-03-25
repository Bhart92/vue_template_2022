<template>
  <section class="landing-container" id="landing-container">
    <div class="landing-background main-background" />
    <MenuContainer />
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
    <PortfolioView />
    <FooterSection />
</template>

<script>
import MenuContainer from "../components/NavBar/MenuContainer";
import AboutView from "./AboutView";
import ServiceView from "./ServiceView";
import PricingView from "./PricingView";
import PortfolioView from "./PortfolioView";
import FooterSection from "../components/footer/FooterSection";
// @ is an alias to /src

export default {
  name: "LandingView",
  components: { MenuContainer ,AboutView, ServiceView, PricingView, PortfolioView, FooterSection}
};
</script>
