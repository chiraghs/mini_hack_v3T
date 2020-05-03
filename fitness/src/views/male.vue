<template>
    <v-stepper v-model="e6" vertical dark>
      <v-stepper-step color="#8B5E3C" :complete="e6 > 1" step="1">
        Day 1, Monday
      </v-stepper-step>
  
      <v-stepper-content step="1" color="#8B5E3C">
        <v-card color="grey darken-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:2 egg omelet with 2 whole grain bread slices / 2 multigrain mixed vegetable parathas + 1 glass of vegetable juice of your choice. </p>
            <p style="margin:20px"><b>LUNCH</b>: 2 multigrain roti / 1 Katori red or brown rice + 1 bowl dal / pulses like rajma / Egg bhurji / non-veg subji + 1 bowl low-fat curd</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>: 1 glass of tea or coffee / 1 glass buttermilk.</p>
            <p style="margin:20px"><b>DINNER</b>: 1 bowl chicken gravy + 1 bowl rice / 2 multigrain rotis + salad + 1 bowl low-fat curd / 1 bowl vegetable dalia upma or 1 bowl millet vegetable upma + 1 bowl sambhar + 1 bowl of salad or soup.</p>
            <p style="margin:20px"><b>DESSERT</b>: 4-5 pieces of nuts/ 1 glass warm low-fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 2" step="2">Day 2, Tuesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:1 bowl red rice or brown rice pulse-mixed pongal + 1 bowl sambhar / 1 sprouted red rice poha + 1 glass vegetable juice of choice. </p>
            <p style="margin:20px"><b>LUNCH</b>: : 2 multigrain roti + 1 bowl vegetable subji / non-veg subji + 1 bowl boiled pulse chaat (rajma, chana, black chana, green moong etc) / 1 bowl red or brown rice + 1 bowl mixed vegetable subji + 1 vegetable egg omlette.</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>: 2 multigrain flour khakras  / 1 fruit of your choice </p>
            <p style="margin:20px"><b>DINNER</b>: 1 bowl vegetable brown rice basmati chicken biryani/ vegetable pulao + 1 bowl vegetable raita + 1 bowl vegetable or chicken salad of choice / 1 bowl steamed red rice + 1 bowl mixed vegetable sambhar + 1 bowl non-veg .</p>
            <p style="margin:20px"><b>DESSERT</b>: 1 glass of whey protein shake .</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 3" step="3">Day 3, Wednesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: 3-4 dal paddu with sambhar / 2 oats idli + sambhar / 2 methi parantha with low-fat curd . </p>
            <p style="margin:20px"><b>LUNCH</b>: 2 multigrain roti + 1 bowl veg or non-veg (seafood, fish, chicken) subji of choice + 1 bowl of thick dal / 1 bowl red rice + 1 bowl mixed vegetable sambhar + 1 bowl subji + 1 bowl low-fat curd </p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  1 bowl mixed veggies chunky soup.</p>
            <p style="margin:20px"><b>DINNER</b>: 1 bowl fruit and veggie mixed salad of choice + 2 bran rotis (wheat roti or oat bran) + 1 bowl of non-veg subji / 1 bowl red rice or brown rice + 1 bowl dal + 1 bowl curd</p>
            <p style="margin:20px"><b>DESSERT</b>: 1 glass of whey protein shake.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 4">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 4" step="4">Day 4, Thursday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:  Peanut Butter & Chocolate Chip Nirvana bar, fresh fruit salad as desired. </p>
            <p style="margin:20px"><b>LUNCH</b>:Golden harvest kale salad with 1/2 cup organic chickpeas.</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:   1 oz. almonds and a few tablespoons raisins.</p>
            <p style="margin:20px"><b>DINNER</b>:   Quick white bean and summer vegetable pasta (prepare with quinoa or brown rice pasta) </p>
            <p style="margin:20px"><b>DESSERT</b>:  2 raw vegan vanilla macaroons .</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 5">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 5" step="5">Day 5, Friday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="5">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: 3-4 dal paddu with sambhar / 2 oats idli + sambhar / 2 methi parantha with low-fat curd . </p>
            <p style="margin:20px"><b>LUNCH</b>: 2 multigrain roti + 1 bowl veg or non-veg (seafood, fish, chicken) subji of choice + 1 bowl of thick dal / 1 bowl red rice + 1 bowl mixed vegetable sambhar + 1 bowl subji + 1 bowl low-fat curd </p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  1 bowl mixed veggies chunky soup.</p>
            <p style="margin:20px"><b>DINNER</b>: 1 bowl fruit and veggie mixed salad of choice + 2 bran rotis (wheat roti or oat bran) + 1 bowl of non-veg subji / 1 bowl red rice or brown rice + 1 bowl dal + 1 bowl curd</p>
            <p style="margin:20px"><b>DESSERT</b>: 1 glass of whey protein shake.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 6" step="4">Day 6, Saturday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="6">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:  Peanut Butter & Chocolate Chip Nirvana bar, fresh fruit salad as desired. </p>
            <p style="margin:20px"><b>LUNCH</b>:Golden harvest kale salad with 1/2 cup organic chickpeas.</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:   1 oz. almonds and a few tablespoons raisins.</p>
            <p style="margin:20px"><b>DINNER</b>:   Quick white bean and summer vegetable pasta (prepare with quinoa or brown rice pasta) </p>
            <p style="margin:20px"><b>DESSERT</b>:  2 raw vegan vanilla macaroons .</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" step="7">Day 7, Sunday</v-stepper-step>
      <v-stepper-content color="#8B5E3C" step="7">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:  Peanut Butter & Chocolate Chip Nirvana bar, fresh fruit salad as desired. </p>
            <p style="margin:20px"><b>LUNCH</b>:Golden harvest kale salad with 1/2 cup organic chickpeas.</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:   1 oz. almonds and a few tablespoons raisins.</p>
            <p style="margin:20px"><b>DINNER</b>:   Quick white bean and summer vegetable pasta (prepare with quinoa or brown rice pasta) </p>
            <p style="margin:20px"><b>DESSERT</b>:  2 raw vegan vanilla macaroons .</p>
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