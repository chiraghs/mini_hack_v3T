<template>
<v-card>
  <v-carousel height="450">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="getImgLink(item.src)"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'diet5.jpg',
          },
          {
            src: 'diet1.jpg',
          },
          {
            src: 'diet3.jpg',
          },
          {
            src: 'diet4.jpg',
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
