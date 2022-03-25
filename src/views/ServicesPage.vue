<template>
    <section class=" services-page">
    <MenuContainer />
        <div class="main-background services-background" />
        <main>
            <h1>What we do different...</h1>
            <div class="services-description">
                <span class="services-description-span">We build our products by hand. No website builders or wordpress. No bloated or unnecssary code. A hand coded website will almost always be leaner and more optimized
                    than a wordpress, or drag and drop website builder. Often times this means hand coded websites outperform in SEO and load times.
                </span>
                <span class="sub-description">Hand coded websites also have unlimited flexbility in their design and functionality. Page builders are bound by themes and templates for the average person.</span>
                
            <div class="services-seo">
                <h2>How do we optimize?...</h2>
                <div class="services-card-container">
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Meaningful content w/ keywords for SEO</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Semantically tagged and architected for web crawlers</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Designed with a Mobile-First approach</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Fully responsive to rock-it across any device</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Custom Logos</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Logo Touchups</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/checkItem.svg" alt="" /><span>Vector illustrations</span></div>
                    <img class="services-icon-image" src="../assets/growth.png" alt="" />
                </div>
            </div>    

            <div class="services-logo">
                
                <div class="background-container" />
                <h2>Logos &<br>Graphic Design</h2>
                <span class="subHeader">We offer <span class="highlight">in-house</span> Logo & Graphic design. Our Designer has years of experience designing, mocking, and whipping up awesome logos.<br>
                Our Logo package includes:</span>
                <div class="services-card-container">
                    <div class="services-icon-wrapper"><img src="../assets/check.png" alt="" /><span>One Logo with 3 edits</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/check.png" alt="" /><span>Exported & optimized in all formats</span></div>
                    <div class="services-icon-wrapper"><img src="../assets/check.png" alt="" /><span>Starting at $350</span></div>
                </div>
                <img class="services-logo-designer" src="../assets/designer.png" alt="" />
            </div>
            
            <div class="services-updates">
                
                <div class="background-container" />
                <h2>Lifetime Updates<br>
                & Edits</h2>
                <span class="subHeader">Search engines and web crawlers change over time. What keeps a website on top<br>
                of search engines in 2019 may not in 2022. That is why we offer <span class="highlight">lifetime<br>
                updates to SEO & web accessibility.</span><br>
                We strive to stay on top of search engines to maximize exposure.<br><br>
                In addition, we offer <span class="highlight">unlimited design edits & content updates.</span> Combined with<br>
                direct access to to your developer our<br>
                clients have full control over the look & feel of their websites.</span>
                <div class="services-card-container">

                </div>
                <img class="services-logo-developer" src="../assets/unlimited.png" alt="" />
            </div>
            <div class="services-pricing">
                <PricingCard :price="150" :cardHeader="'All services listed above'"
                :cardSubHeader="'Six month minimum'" :cardTitle="'Standard'"
                :cardList="
                {
                    carditemOne: {
                    itemInfo: 'Infinite edits & design changes'
                    },
                    carditemThree: {
                    itemInfo: 'Hosting fees built-in'
                    },
                    carditemFour: {
                    itemInfo: 'Free Logo w/2 edits'
                    },
                }"
                />
                <PricingCard :price="200" :cardHeader="'Integration with third party services'"
                :cardSubHeader="'Pricing depends on features requested*'" :cardTitle="'Standard + Features'"
                :cardList="
                    {
                    carditemOne: {
                        itemInfo: 'Appointment setting'
                    },
                    carditemTwo: {
                        itemInfo: 'Order Placing'
                    },
                    carditemThree: {
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
                        itemInfo: 'Standard five page website'
                    },
                    carditemTwo: {
                        itemInfo: 'Logo w/ two edits'
                    },
                    carditemThree: {
                        itemInfo: 'Google Business Profile, Analytics, and SEO included'
                    },
                    }
                "
                />
                <PricingCard :price="350" :cardHeader="'One-time fee'" :isMonthly="false"
                :cardSubHeader="'Pricing may vary depending on design*'" :cardTitle="'Logo Design + Creation'"
                :cardList="
                    {
                    carditemOne: {
                        itemInfo: 'Logo w/ two edits'
                    },
                    carditemTwo: {
                        itemInfo: 'Optimized & exported in all formats'
                    },
                    carditemThree: {
                        itemInfo: 'Free with every web package!'
                    },
                    }
                "
                />
                <PricingCard :price="100" :cardHeader="'One-time fee'" :isMonthly="false"
                :cardSubHeader="'Pricing may vary depending on design*'" :cardTitle="'Logo Edits'"
                :cardList="
                    {
                    carditemOne: {
                        itemInfo: 'Logo cleanup'
                    },
                    carditemTwo: {
                        itemInfo: 'Export & optimize formats'
                    },
                    carditemThree: {
                        itemInfo: 'Color theme swaps'
                    },
                    }
                "
                />
            </div>
            </div>
            <FooterSection />
        </main>
    </section>
    
</template>
<script>
import MenuContainer from '../components/NavBar/MenuContainer.vue';
import PricingCard from '../components/pricing/PricingCard';

import FooterSection from "../components/footer/FooterSection";
export default {
  components: { MenuContainer, PricingCard, FooterSection},
  created(){
    window.scrollTo(0,0);
  }
    
}
</script>