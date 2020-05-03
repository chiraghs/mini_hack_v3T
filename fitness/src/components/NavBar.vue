<template>
    <nav>

    <v-toolbar flat class="grey darken-4" >
      <img alt="Vue logo" src="../assets/logo.png" height="45" width="45"
      link router :to="links[0].route">

      <v-flex class="mx-4">
    </v-flex>

      <v-spacer></v-spacer>


      <v-btn icon v-model="drawer" @click="drawer =!drawer">
        <v-icon class="white--text">mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>



      <v-navigation-drawer app temporary
      class="px-0"
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :src="bg"
        dark
      >
        <v-list
          dense
          nav
          class="py-0 px-1"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar size="70" class="mr-3">
              <img src="../assets/logo.png">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Fitness</v-list-item-title>
              <v-list-item-subtitle>CodeRit Hackhathon</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>


          <v-list-item
            v-for="item in links"
            :key="item.title"
            link router :to="item.route" class="py-1"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>



       </nav>
</template>

<script>

export default {
    data(){
        return{
            drawer:false,
            links:[
                     { icon: 'mdi-home-outline', text: 'Home', route: '/' },
                     { icon: 'mdi-doctor', text: 'Consult', route: '/consult' },
                     { icon: 'mdi-storefront-outline', text: 'Store', route: '/store' },
            ],
        right: true,
        miniVariant: false,
        expandOnHover: true,
        background: false,
      }
        },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },

}
</script>