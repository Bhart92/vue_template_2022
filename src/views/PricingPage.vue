<template>
    <section class="pricing-page">
        <div class="main-background pricing-background" />
        <MenuContainer />
        
    <main>
        <h1>How much does everything<br>cost?</h1>
             
    <div class=" pricing-module">
      <div class="pricing-module-sub">
            <h3 class="pricing-sub-head">standard package</h3>

          <h2>$0 Down, $150/Month!</h2>
          <h3>Three month minimum required*</h3>
          <h4>This includes:</h4>
          <PricingIncludes :image="'infinite.png'" class="first-includes"
            :title="'Infinite edits'" :subText="'Our clients have unlimited website edits!'"/> 

          <PricingIncludes :image="'domain.png'"
            :title="'Hosting fees built-in'" :subText="'We take the stress out of hosting so you can focus on business.'"/>
          
          <PricingIncludes :image="'dev.png'"
            :title="'Direct developer access'" :subText="'With direct access to your developer making changes to your website is as easy as 1, 2, 3.'"/>
          
          <PricingIncludes :image="'designer.png'"
            :title="'Logo designs'" :subText="`Need a logo? Our standard package includes a logo with 2 edits!`"/> 

          <img class="pricing-module-image" src="../assets/pricing.png" />
      </div>
      <div class="pricing-card-container">

        <PricingCard class="pricing-page-card" :price="150" :cardHeader="'All services listed above'"
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
        <PricingCard :price="200" :cardHeader="'Integration with third party services'"
        :cardSubHeader="'Pricing depends on features requested*'" :cardTitle="'Standard + Features'"
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
        <PricingCard :price="1500" :cardHeader="'One-time fee'" :isMonthly="false"
        :cardSubHeader="'Pricing may vary depending on design*'" :cardTitle="'Standard(no subscription)'"
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
        <PricingCard :price="100" :cardHeader="'One-time fee'" :isMonthly="false"
        :cardSubHeader="'Pricing may vary depending on design*'" :cardTitle="'Logo Edits'"
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
    </main>
    </section>
    <FooterSection />
</template>
<script>
import MenuContainer from "../components/NavBar/MenuContainer";
import PricingIncludes from '../components/pricing/PricingIncludes';
import PricingCard from '../components/pricing/PricingCard';
import FooterSection from "../components/footer/FooterSection";
export default {
    
  components: { PricingIncludes, PricingCard, MenuContainer, FooterSection },
  created(){
    window.scrollTo(0,0);
  }
}
</script>