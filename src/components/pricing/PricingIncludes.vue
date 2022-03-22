<template>
    <div class="pricing-includes-item">
        <div class="pricing-item-img">
            <img :src="require(`../../assets/check.svg`)" alt="" />
        </div>
        <div>
            <h5>{{title}}</h5>
            <span>{{subText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {type: String},
        title: {type: String},
        subText: {type: String}
    }
}
</script>