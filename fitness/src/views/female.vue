<template>
    <v-stepper v-model="e6" vertical dark>
      <v-stepper-step color="#8B5E3C" :complete="e6 > 1" step="1">
        Day 1, Monday
      </v-stepper-step>
  
      <v-stepper-content step="1" color="#8B5E3C">
        <v-card color="grey darken-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Sambar with 2 brown rice idlis/ Paneer sandwich with mint chutney</p>
            <p style="margin:20px"><b>LUNCH</b>:  Whole-grain roti with mixed-vegetable curry with one dal.</p>
            <p style="margin:20px"><b>DINNER</b>: Tofu/chicken curry with mixed vegetables and a fresh spinach salad/chicken gravy with 2 multigrain rotis.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 2" step="2">Day 2, Tuesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:Chana dal pancakes with mixed vegetables and a glass of milk/ bread and egg with fruits. </p>
            <p style="margin:20px"><b>LUNCH</b>:  Chickpea curry with brown rice/ Brown rice with dal.</p>
            <p style="margin:20px"><b>DINNER</b>: : Khichdi with sprout salad/Veg paratha with raita</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 3" step="3">Day 3, Wednesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:Apple cinnamon porridge/ Vegetable uttapam with sambhar. </p>
            <p style="margin:20px"><b>LUNCH</b>: Whole-grain roti with tofu/ non veg and mixed vegetables.</p>
            <p style="margin:20px"><b>DINNER</b>: Palak paneer with brown rice and vegetables/ 2 Multigrain rotis with chicken and curd.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 4">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 4" step="4">Day 4, Thursday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:Yogurt with sliced fruits and sunflower seeds/ vegetable poha. </p>
            <p style="margin:20px"><b>LUNCH</b>: Whole-grain roti with vegetable sabzi/ Dal with veg or non veg sabzi and brown rice.</p>
            <p style="margin:20px"><b>DINNER</b>:Chana masala with basmati rice and green salad/ One bowl of fruits and vegetables with multigrain rotis.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 5">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 5" step="5">Day 5, Friday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="5">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:Vegetable dalia and a glass of milk/ 3-4 dal paddu with sambar.</p>
            <p style="margin:20px"><b>LUNCH</b>: Vegetable sambar with brown rice/ 2 multigrain roti with veg/non veg curry.</p>
            <p style="margin:20px"><b>DINNER</b>:Tofu curry with potatoes and mixed vegetables/ chicken curry with 2 multigrain rotis.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 6" step="4">Day 6, Saturday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="6">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Multigrain parathas with avocado and sliced papaya/ dal paratha with mixed vegetables. </p>
            <p style="margin:20px"><b>LUNCH</b>:Large salad with rajma curry and quinoa/ one bowl mixed vegetable kadai.</p>
            <p style="margin:20px"><b>DINNER</b>:  Lentil pancakes with tofu tikka masala/ green salad with mixed vegetables and multigrain roti.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" step="7">Day 7, Sunday</v-stepper-step>
      <v-stepper-content color="#8B5E3C" step="7">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:: Buckwheat porridge with sliced mango/ fruit salad with a glass of milk. </p>
            <p style="margin:20px"><b>LUNCH</b>: Vegetable soup with whole-grain roti/ one bowl millet and dal khichdi with multigrain roti.</p>
            <p style="margin:20px"><b>DINNER</b>:Masala-baked tofu with vegetable curry/ non veg curry (chicken, seafood) with multigrain roti.</p>
        </v-card>
        <v-btn color="#8B5E3C">Finished</v-btn>
      </v-stepper-content>
    </v-stepper>
  </template>
  
  <script>
    export default {
      data () {
        return {
          e6: 1,
        }
      },
    }
  </script>