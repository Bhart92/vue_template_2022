<template>
    <section class="footer-container">
        <div class="footer-background" />
        <div class="footer-logo">
            <span>909</span><img src="../../assets/nav-logo.png" alt="a logo" />
        </div>
        <div class="footer-info-container flex-col-start">
            <div class="footer-contact flex-col-start">
                <h6>Contact</h6>
                <span>909webstudio@gmail.com</span>
                <span>(909)-436-6726</span>
            </div>
            <div class="footer-navigation flex-col-start">
                <h6>Navigation</h6>
                <router-link to="/" @click="scrollToTop">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/services">Services</router-link>
                <router-link to="/pricing">Pricing</router-link>
            </div>
            <div class="footer-services flex-col-start">
                <h6>Services</h6>
                <span>Web Development & Design</span>
                <span>Logo Design & Developent</span>
                <span>SEO</span>
                <span>Page Optimization</span>
                <span>Mobile-First Designs</span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'FooterSection',
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        }
    }
}
</script>