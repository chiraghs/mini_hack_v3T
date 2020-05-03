<template>
  <div id="home" class="grey darken-4">
    <v-parallax
    height="600"
    src="../assets/hero1.jpg"
    >
      <div class="hero text" style="margin-left:100px;">
        <h1 style="font-size:40px">Keep Your Body</h1>
        <h1 style="font-size:50px">FIT & <span style="color:#8B5E3C">STRONG</span></h1>
        <v-layout row mx-1>
          <v-flex xs3 sm3 md1 mx-2>
            <v-btn depressed small class="white--text" color="#8B5E3C" href="/consult">Consult</v-btn>
          </v-flex>
          <v-flex xs4 md1>
            <v-btn depressed small class="white--text" color="#8B5E3C" href="/store">Store</v-btn>
          </v-flex>
        </v-layout>
      </div>
  </v-parallax>

  <div class="section2">
        <v-layout row class="ma-4">
          <v-flex xs6 sm6 md6>
              <v-card class="mx-auto" max-width="600" style="cursor:pointer" href="/athome">
                <v-img class="white--text align-end" height="200px" src="../assets/gym10.jpg">
                <v-card-title style="font-size:26px;">At Home</v-card-title>
                </v-img>
              </v-card>
          </v-flex>
          <v-flex xs6 sm6 md6>
            <v-card class="mx-auto" max-width="600"  style="cursor:pointer" href="/personaltrainer">
                <v-img class="white--text align-end" height="200px" src="../assets/gym3.jpg">
                <v-card-title style="font-size:26px;">Personal Trainer</v-card-title>
                </v-img>
            </v-card>
          </v-flex>
        </v-layout>
  </div>

  <div class="section3">
    <Diet class="ma-6"/>
  </div>

  <div class="section3">
    <Gymforms/>
  </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {
      Diet: () => import('@/components/Diet'),
      Gymforms: () => import('@/components/gymform'),
    }
  }
</script>
