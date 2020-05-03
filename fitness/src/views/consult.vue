<template>
  <div id="home" class="grey darken-4">
  <div class="section2">
        <v-layout row mx-4 center>
          <v-flex xs6 sm6 md4 v-for="(item,i) in items" :key="i" class="pa-2">
              <v-card
    class="mx-auto"
    color="grey darken-3"
    dark
    max-width="400"
  >

    <v-card-text class="headline font-weight-bold">
        Dermatologist
    </v-card-text>
    <v-icon class="ml-4">mdi-map</v-icon>
    <span xs-small class="subheading">Msr Nagar, Bangalore</span>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-phone</v-icon>
          <span class="subheading mr-2">9380939280</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
          </v-flex>
        </v-layout>

  </div>

  <div class="section3">
    <Diet class="ma-6"/>
  </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
          items: [
          {
            src: 'gym1.jpg', text: 'Gyms Near', subtext: 'Healthy Recipes', route: '/gymnear'
          },
          {
            src: 'gym2.jpg', text: 'Online Therapy', subtext: 'feel Good', route: '/onlinetherapy'
          },
          {
            src: 'gym6.jpg', text: 'Trainer', subtext: 'Sweat Achieve',  route: '/trainer'
          },
          {
            src: 'gym8.jpg', text: 'Commit Track', subtext: 'to be fit', route: '/committrack'
          },
           {
            src: 'diet3.jpg', text: 'Eat Good', subtext: 'Sweat Achieve', route: '/eatgood'
          },
          {
            src: 'diet4.jpg', text: 'Fit or Not', subtext: 'to be fit', route: '/fitornot'
          },
        ],
      }
    },
    components: {
      Diet: () => import('@/components/Diet'),
    }
  }
</script>
