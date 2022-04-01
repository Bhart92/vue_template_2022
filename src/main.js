import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { toggleNav } from "./js/NavFunctions";
import "./styles/styles.scss";
// Required for smooth scroll in Safari
window.requestAnimationFrame(smoothscroll.polyfill);
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

    createApp(App).use(store).use(router).mount("#app");

    const setVDimensions = function()
    {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        document.documentElement.style.setProperty("--vw", `${vw}px`);
        document.documentElement.style.setProperty("position", "absolute");
        document.body.style.setProperty("position", "absolute");
        store.commit("setTrueVH", vh);
        store.commit("setTrueVW", vw);
    };

    const setViewportHeight = () =>
    {
        
        setVDimensions();
        // We listen to the resize event
        window.addEventListener("resize", () =>
        {
            // We execute the same script as before
            setVDimensions();
            
            window.setTimeout(() =>
                {
                    setVDimensions();
                }, 500);
        });
    };

    const setOrientation = () => {
        if(screen.orientation.angle != 0) {
            store.commit("setIsRotated", true);
        } else {
            store.commit("setIsRotated", false);
        }
    };

    setViewportHeight();
    setOrientation();
    screen.orientation.addEventListener("change", function(e) {
        setOrientation();
    });
