<template>
  <div id="home" class="grey darken-4">
  <div class="section3">
    <Dietstore class="ma-6"/>
  </div>
  <div class="section2">
        <v-layout row mx-4 center>
          <v-flex xs6 sm6 md3 v-for="(item,i) in items" :key="i" class="pa-2">
              <v-card
    class="mx-auto ma-2"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>

    <v-card-subtitle v-if="item.instock" class="pb-0">In Stock</v-card-subtitle>
    <v-card-subtitle v-else class="pb-0">No Stock</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item.text}}</div>

      <div>{{item.subtext}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Buy Now
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
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
           {
            src: 'diet3.jpg', text: 'Eat Good', subtext: 'Sweat Achieve', route: '/eatgood', instock: false
          },
          {
            src: 'diet4.jpg', text: 'Fit or Not', subtext: 'to be fit', route: '/fitornot', instock: true
          },
          {
            src: 'gym1.jpg', text: 'Gyms Near', subtext: 'Healthy Recipes', route: '/gymnear', instock: true
          },
          {
            src: 'gym2.jpg', text: 'Online Therapy', subtext: 'feel Good', route: '/onlinetherapy', instock: false
          }
        ],
      }
    },
    components: {
      Dietstore: () => import('@/components/StoreSlider'),
    }
  }
</script>
