<template>
  <v-app class="grey">
    <NavBar  class="grey"></NavBar>
      <router-view class="grey"></router-view>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>
