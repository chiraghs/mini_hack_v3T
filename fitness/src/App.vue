<template>
  <v-app class="grey">
    <NavBar  class="grey"></NavBar>
      <router-view class="grey"></router-view>
      <Fab/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Fab from './components/floatfab'

export default {
  name: 'App',

  components: {
    NavBar,
    Footer,
    Fab
  },

  data: () => ({
    //
  }),
};
</script>
