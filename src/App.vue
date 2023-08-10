<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import HomeView from './views/HomeView.vue'
export default{
  components:{AppHeader,AppFooter},
}
</script>

<template>
 <main class="main-layout">

   <AppHeader/>
   
   <RouterView />
   <AppFooter/>
  </main>
</template>


