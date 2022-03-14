<template>
    <div class="services-card">
     <div class="service-card-background" />
        <img :src="require(`../../assets/${image}`)" alt="" />
      <h3>{{title}}</h3>
      <div class="services-card-info">
        <span>
          {{subText}}
        </span>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        image: {type: String},
        title: {type: String},
        subText: {type: String},
    }
}
</script>