<template>
    <button>{{readMore ? 'Read More' : 'Visit'}}</button>
</template>
<script>
export default {
    props: {
        readMore: {type: Boolean, default: true}
    }
}
</script>