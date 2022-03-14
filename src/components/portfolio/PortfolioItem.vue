<template>
    <div class="portfolio-item-wrapper">
        <div class="portfolio-image">
            <img :src="require(`../../assets/${image}`)" />
        </div>
        <div class="portfolio-info">
            <h6>{{title}}</h6>
            <span>{{subText}}</span>
            <DefaultBtn :text="'Visit'"/>
        </div>
    </div>
</template>
<script>
import DefaultBtn from '../base/DefaultBtn.vue';

export default {
    components: {DefaultBtn},
    props: {
        title: {type: String},
        subText: {type: String},
        image: {type: String}
    }
}
</script>