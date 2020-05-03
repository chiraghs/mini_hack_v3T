<template>
        <v-layout row mx-4 center>
          <v-flex xs6 sm6 md4 v-for="(item,i) in items" :key="i" class="pa-2">
              <v-card class="mx-auto" max-width="600" style="cursor:pointer" :href="item.route">
                <v-img class="white--text align-end" height="200px" :src="getImgLink(item.src)">
                <v-card-title style="font-size:26px;">{{item.text}}</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
        </v-layout>
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
    methods: {
        getImgLink(pic){
            return require('../assets/' + pic)
        }
    }
  }
</script>
