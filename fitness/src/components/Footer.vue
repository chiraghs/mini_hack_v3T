<template>
    <nav>

    <v-toolbar flat class="grey darken-4" >
      <img alt="Vue logo" src="../assets/logo.png" height="45" width="45"
      link router :to="links[0].route">

      <v-flex class="mx-4">
    </v-flex>
    <div>
       <a class="white--text" style="text-decoration:none" href="https://www.chiraghs.me"  target="_blank">Made with love by v3T © 2020</a>
    </div>

      <v-spacer></v-spacer>


      <v-btn icon href="https://www.instagram.com/chirag_hs_/" target="_blank">
        <v-icon class="white--text">mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon href="https://www.facebook.com/chiraghs.hs"  target="_blank">
        <v-icon class="white--text">mdi-facebook</v-icon>
      </v-btn>


      <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn icon v-model="drawer" v-on="on">
          <v-icon left class="white--text">mdi-account-box-outline</v-icon>
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

      <v-btn style="margin-right:40px" icon  href="https://www.chiraghs.me"  target="_blank">
        <v-icon class="white--text">mdi-web</v-icon>
      </v-btn>

    </v-toolbar>

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
        dialog: false,
      }
        },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },

}
</script>