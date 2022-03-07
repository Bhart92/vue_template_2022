import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/styles.scss";

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
        console.log(vh, vw);
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
    setViewportHeight();
