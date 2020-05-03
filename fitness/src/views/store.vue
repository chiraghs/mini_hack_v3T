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
      :src="item.imagurl"
    >
    </v-img>

    <v-card-subtitle v-if="item.instock" class="pb-0">In Stock</v-card-subtitle>
    <v-card-subtitle v-else class="pb-0">{{item.name}}</v-card-subtitle>
    <v-card-subtitle class="pb-0">Rs {{item.price}}</v-card-subtitle>

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
import db from '@/fb'
  export default {
    data () {
      return {
          items: [  ],
      }
    },
    methods: {
        /* getImgLink(pic){
            return require('../assets/' + pic)
        } */
    },
    components: {
      Dietstore: () => import('@/components/StoreSlider'),
    },
    created() {
      db.collection('store').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.items.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>
