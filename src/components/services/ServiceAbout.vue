<template>
    <div class="services-module">
      <div class="background-container" />
      <h1>{{title}}</h1>
      <div class="services-module-sub">
        <span>
          {{subText}}
        </span>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {type: String},
        subText: {type: String}
    }
}
</script>