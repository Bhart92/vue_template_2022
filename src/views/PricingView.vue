<template>
  <section class="pricing-container">
      
    <div class=" pricing-module">
      <div class="background-container" />
      <h1>How much<br>does this all cost?</h1>
      <div class="pricing-module-sub">
          <h2>$0 Down, $150/Month!</h2>
          <h3 class="pricing-sub-head">standard package</h3>
          <h3>Three month minimum required*</h3>
          <h4>This includes:</h4>

          <div class="pricing-includes-item">
              <div class="pricing-item-img">
                  <img src="../assets/infinite.png" alt="" />
              </div>
              <div>
                <h5>Infinite edits</h5>
                <span>Our clients have unlimited website edits!</span>
              </div>
          </div>

          <div class="pricing-includes-item">
              <div class="pricing-item-img">
                  <img src="../assets/domain.png" alt="" />
              </div>
              <div>
                <h5>Hosting fees built-in</h5>
                <span>We take the stress out of hosting so you can focus on business.</span>
              </div>
          </div>

          <div class="pricing-includes-item">
              <div class="pricing-item-img">
                  <img src="../assets/dev.png" alt="" />
              </div>
              <div>
                <h5>Direct developer access</h5>
                <span>With direct access to your developer making changes to your website is as easy as 1, 2, 3.</span>
              </div>
          </div>

          <div class="pricing-includes-item">
              <div class="pricing-item-img">
                  <img src="../assets/design.png" alt="" />
              </div>
              <div>
                <h5>Unlimited design & dev hours</h5>
                <span>Don't like how an image looks? want to change your layout a bit? Clients have unlimited design & dev hours!</span>
              </div>
          </div>

          <div class="pricing-includes-item">
              <div class="pricing-item-img">
                  <img src="../assets/designer.png" alt="" />
              </div>
              <div>
                <h5>Logo designs</h5>
                <span>Need a logo? Our standard package includes a logo with 2 edits!</span>
              </div>
          </div>

      </div>
      <div class="pricing-card-container">

        <PricingCard :price="250" :cardHeader="'Integration with third party services'"
        :cardSubHeader="'Pricing depends on features requested*'" :cardTitle="'Features + Standard'"
        :cardList="
            {
              carditemOne: {
                itemImg: require('../assets/calendar.svg'),
                itemInfo: 'Appointment setting'
              },
              carditemTwo: {
                itemImg: require('../assets/phoneOrder.png'),
                itemInfo: 'Order Placing'
              },
              carditemThree: {
                itemImg: require('../assets/custom.png'),
                itemInfo: 'Custom features'
              },
            }
          "
        />
        <PricingCard :price="150" :cardHeader="'All services listed above'"
        :cardSubHeader="'Six month minimum'" :cardTitle="'Standard'"
        :cardList="
          {
            carditemOne: {
              itemImg: require('../assets/calendar.svg'),
              itemInfo: 'Infinite edits & changes'
            },
            carditemThree: {
              itemImg: require('../assets/custom.png'),
              itemInfo: 'Hosting fees built-in'
            },
            carditemFour: {
              itemImg: require('../assets/custom.png'),
              itemInfo: 'Free Logo w/2 edits'
            },
          }"
        />
        <PricingCard :price="350" :cardHeader="'One-time fee'" :isMonthly="false"
        :cardSubHeader="'Pricing may vary depending on design*'" :cardTitle="'Logo Design + Creation'"
        :cardList="
            {
              carditemOne: {
                itemImg: require('../assets/calendar.svg'),
                itemInfo: 'Appointment setting'
              },
              carditemTwo: {
                itemImg: require('../assets/phoneOrder.png'),
                itemInfo: 'Order Placing'
              },
              carditemThree: {
                itemImg: require('../assets/custom.png'),
                itemInfo: 'Custom features'
              },
            }
          "
        />

      </div>
    </div>
  </section>
</template>

<script>
import PricingCard from '../components/pricing/PricingCard';
export default {
  name: "PricingView",
  components: {PricingCard},
};
</script>
