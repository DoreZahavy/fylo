<script>
import Hero from '@/components/Hero.vue'
import TeaserList from '@/components/TeaserList.vue'
import BottomInfo from '@/components/BottomInfo.vue'
import Reviews from '@/components/Reviews.vue'
import EarlyAccess from '@/components/EarlyAccess.vue'

export default{
  components:{
    Hero,
    TeaserList,
    BottomInfo,
    Reviews,
    EarlyAccess
  }
}
</script>

<template>
  <main>
    <Hero/>
    <TeaserList/>
    <BottomInfo/>
    <Reviews/>
    <EarlyAccess/>
  </main>
</template>
