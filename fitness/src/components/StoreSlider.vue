<template>
<v-card>
  <v-carousel height="450">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="getImgLink(item.src)"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div class="dietinfo">
        <!-- <v-layout row class="ma-4">
          <v-flex xs6 sm6 md6>
              <v-card class="mx-auto" max-width="600" style="cursor:pointer" href="/athome">
                <v-img class="white--text align-end" height="200px" src="../assets/gym10.jpg">
                <v-card-title style="font-size:26px;">At Home</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
          <v-flex xs6 sm6 md6>
                <v-card-title class="white--text" style="font-size:26px;">Personal Trainer</v-card-title>
          </v-flex>
        </v-layout> -->
         <div class="diettextinfo" style="color:white;margin:180px 100px;">
           <h2 style="font-size:55px">{{item.text}}</h2>
           <h2 style="font-size:26px">{{item.subtext}}</h2>
         </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'gym7.jpg', text: 'Best', subtext: 'Equipments'
          },
          {
            src: 'gym8.jpg', text: 'Qualitative', subtext: '& Quantitative'
          },
          {
            src: 'gym9.jpg', text: 'Technology', subtext: 'Powered'
          },
          {
            src: 'gym12.jpg', text: 'Assured', subtext: 'products'
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
