<template>
  <div id="home" class="grey darken-4">

    <div class="section2">
        <v-layout row class="ma-4">
          <v-flex xs6 sm6 md6>
              <v-card class="mx-auto" max-width="600" heigth="400" style="cursor:pointer" href="/vegan">
                <v-img class="white--text align-end" height="200px" src="../assets/diet2.jpg">
                <v-card-title style="font-size:26px;">Vegan Diet</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <v-card class="mx-auto" max-width="600"  style="cursor:pointer" href="/female">
                <v-img class="white--text align-end" height="200px" src="../assets/dietfemale.jpg">
                <v-card-title style="font-size:26px;">Female Diet</v-card-title>
                </v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row class="ma-4">
          <v-flex xs6 sm6 md6>
              <v-card class="mx-auto" max-width="600" style="cursor:pointer" href="/male">
                <v-img class="white--text align-end" height="200px" src="../assets/dietmale.jpg">
                <v-card-title style="font-size:26px;">Male Diet</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <v-card class="mx-auto" max-width="600"  style="cursor:pointer" href="/oldage">
                <v-img class="white--text align-end" height="200px" src="../assets/gym3.jpg">
                <v-card-title style="font-size:26px;">Elder People Diet</v-card-title>
                </v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row class="ma-4">
          <v-flex xs6 sm6 md6>
              <v-card class="mx-auto" max-width="600" style="cursor:pointer" href="/children">
                <v-img class="white--text align-end" height="200px" src="../assets/gym10.jpg">
                <v-card-title style="font-size:26px;">Children Diet</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
        </v-layout>
  </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
          items: [
          {
            src: 'gym1.jpg', text: 'Gyms Near', subtext: 'Healthy Recipes', route: '/gymnear', instock: true
          },
          {
            src: 'gym2.jpg', text: 'Online Therapy', subtext: 'feel Good', route: '/onlinetherapy', instock: false
          },
          {
            src: 'gym6.jpg', text: 'Trainer', subtext: 'Sweat Achieve',  route: '/trainer', instock: true
          },
          {
            src: 'gym8.jpg', text: 'Commit Track', subtext: 'to be fit', route: '/committrack', instock: true
          },
        ],
      }
    },
    components: {

    }
  }
</script>
