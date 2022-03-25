<template>
    <div class="pricing-card flex-col-center">
        <div class="pricing-card-background" />
        <div class="pricing-card-cost flex-col-center">
            <span>Starting at</span>
            <h5><span>$</span>{{price}}<span v-if="isMonthly">/MO</span></h5>
        </div>
        <div class="pricing-card-list flex-col-center">
            <h6>{{cardHeader}}</h6>
            <span class="pricing-card-list-sub">{{cardSubHeader}}</span>
            <div class="pricing-card-info-wrap">
                <div class="pricing-card-info" v-for = "(item, index) in cardList" v-bind:key="item[index]" >
                    <img src="../../assets/checkItem.svg"/>
                    <span>
                        {{item.itemInfo}}
                    </span>
                </div>
            </div>

            <button>Read more...</button>
          </div>
        <div class="pricing-card-title flex-center">
            <h4>{{cardTitle}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cardImage: []
        }
    },
    props: {
        price: {type: Number, default: 150},
        cardHeader: {type: String, default: ''},
        cardSubHeader: {type: String, default: ''},
        cardTitle: {type: String, default: ''},
        isMonthly: {type: Boolean, default: true},
        cardList: 
        {
            type: Object,
            default(){
                return {}
            }
            
        }
    }
}
</script>