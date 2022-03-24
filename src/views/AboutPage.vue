<template>
<section class="about-page">
    <div class="background-container main-background" />
    <MenuContainer/>
    <main>
        
        <h1>A bit about us...</h1>
        <div class="about-description">
            <p>909 Web Studios is a family owned and operated<br>
            web development & design agency with a <span class="highlight">focus<br>
            on small businesses.</span> By limiting our scope of<br>
            clientele to small business <span class="highlight">we allow more room<br>
            to provide quality service & products.</span> Our goal<br>
            is to keep our clients happy. This is why we offer<br>
            an unlimited edits service in our monthly fee. <span class="highlight">Our<br>
            clients get to have  their own personal developer<br>
            on call - 24/7.</span> Our websites are built with state<br>
            of the art web technologies - no outdated<br>
            languages or practices.
            </p>
        </div>
        <div class="about-extra">
            <h1>We bring the big agency<br> 
            experience to small<br>
            businesses.</h1>
            <img class="about-extra-image" src="../assets/about-extra.png" alt="" />
            <div class="about-extra-desc">
                <p>Our developers have experience<br>
                working in some of the biggest<br>
                industry agencies. We<br>
                believe that <span class="highlight">every<br>
                company should have<br>
                access to quality web<br>
                presence regardless<br>
                of their scale.</span><br><br>
                
                Combining our <span class="highlight">real world industry experience</span><br>
                and the idea that a quality web product<br>
                shouldnt break the bank led us to develop<br>
                our monthly payment plan in conjuncture<br>
                with our variety of payment options.<br>
                We have found this method allows small<br>
                businesses to have <span class="highlight">access to professional<br>
                developers for a fraction of the price up front</span>.
                </p>
                <router-link to="/services" class="about-services-link">Services</router-link>
            </div>
        </div>
    </main>
    <img class="about-bottom-graphic" src="../assets/about-page-icon.png" alt="" />

</section>
    <FooterSection />
</template>
<script>
import MenuContainer from "../components/NavBar/MenuContainer";
import FooterSection from "../components/footer/FooterSection";
export default {
    components: { MenuContainer, FooterSection },
    created(){
        window.scrollTo(0,0);
        }
}
</script>