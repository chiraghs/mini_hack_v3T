<template>
    <nav>

    <v-toolbar flat class="grey darken-4" >
      <a href="/" style="cursor:pointer;"><img alt="Vue logo" src="../assets/logo.png" height="45" width="45" ></a>


      <v-layout id="navmenu" row wrap class="mx-11 pa-1">
        <v-flex v-for="(navitem,i) in navitems" :key="i" class="white--text" style="cursor:pointer;">
          <div ><a :href="navitem.rout" id="navitem">{{navitem.text}}</a></div>
        </v-flex>
      </v-layout>

      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn icon v-model="drawer" v-on="on" class="white--text">
          <v-icon left class="white--text">mdi-account-circle</v-icon>Contact
        </v-btn>
      </template>
      <v-card dark>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="First name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Last name" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Phone Number*" hint="we use your Phone number to contact you"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required hint="we use your Email to contact you"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field label="Weight" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field label="Height" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select dark class="dark"
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete color="grey"
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple dark
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

      <v-spacer></v-spacer>


      <v-flex class="mx-4">
      </v-flex>




      <v-btn icon v-model="drawer" @click="drawer =!drawer">
        <v-icon class="white--text">mdi-menu-open</v-icon>
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
            drawer: false,
            dialog: false,
            links:[
                     { icon: 'mdi-home-outline', text: 'Home', route: '/' },
                     { icon: 'mdi-doctor', text: 'Consult', route: '/consult' },
                     { icon: 'mdi-storefront-outline', text: 'Store', route: '/store' },
                     { icon: 'mdi-food-apple-outline', text: 'Diet', route: '/diet' },
                     { icon: 'mdi-dumbbell', text: 'Gyms Near', route: '/gymnear' },
                     { icon: 'mdi-shield-account-outline', text: 'Trainer', route: '/trainer' },
            ],
            navitems:[
                      {text: 'Consult', rout: '/consult'},
                      {text: 'Store', rout: '/store'},
                      {text: 'Diet', rout: '/diet'},
                      {text: 'Trainer', rout: '/trainer'},
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

<style scoped>

#navitem{
  color: white;
  text-decoration: none;
  transition: 0.2s ease-in;
}
#navitem:hover {
  color: #8B5E3C
}
@media only screen and (max-width: 650px) {
  #navmenu {
    visibility: hidden;
  }
}
</style>