<template>
    <v-stepper v-model="e6" vertical dark>
      <v-stepper-step color="#8B5E3C" :complete="e6 > 1" step="1">
        Day 1, Monday
      </v-stepper-step>
  
      <v-stepper-content step="1" color="#8B5E3C">
        <v-card color="grey darken-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Vanilla chia pudding with 1 cup fresh berries. </p>
            <p style="margin:20px"><b>LUNCH</b>: Crunchy red cabbage and green apple sesame slaw with 1 cup steamed, cubed sweet potato (or 1 small sweet potato, baked) </p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>: 1/4 cup hemp hummus with fresh vegetables (carrots, celery, romaine leaves, bell pepper, etc.) </p>
            <p style="margin:20px"><b>DINNER</b>: Black bean and quinoa salad with quick cumin dressing.</p>
            <p style="margin:20px"><b>DESSERT</b>: Dark chocolate</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 2" step="2">Day 2, Tuesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Smoothie with 1 cup almond milk, 1 large frozen banana. </p>
            <p style="margin:20px"><b>LUNCH</b>: 1 brown rice tortilla (Food For Life brand) or two gluten free corn tortillas with 1/4 cup hemp hummus, fresh or roasted red bell pepper, sliced cucumbers, and a handful of greens. Serve with steamed vegetables as desired, or a small side salad.  </p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  Protein bar.</p>
            <p style="margin:20px"><b>DINNER</b>:  Zucchini Pasta with Cherry Tomatoes, Sweet Potato, Basil, and Hemp “Parmesan” .</p>
            <p style="margin:20px"><b>DESSERT</b>:  Banana soft serve .</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 3" step="3">Day 3, Wednesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>:  Quinoa breakfast porridge with 1 cup fresh berries . </p>
            <p style="margin:20px"><b>LUNCH</b>:Large salad with at least three cups of greens, whichever veggies you like, 3 tablespoons pumpkin or hemp seeds, and a dressing of choice. </p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  4 tablespoons hemp hummus with fresh vegetables (carrots, celery, romaine leaves, bell pep-per, etc.) .</p>
            <p style="margin:20px"><b>DINNER</b>:  Small baked sweet potato (instructions below) with a tablespoon of melted coconut oil, half a cup of organic black beans, and steamed greens as desired (or a fresh side salad).</p>
            <p style="margin:20px"><b>DESSERT</b>:  2 raw brownie bites.</p>
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
            <p style="margin:20px"><b>BREAKFAST</b>: Smoothie with 1 cup almond milk, 1 cup frozen blueberries, 1 serving chocolate Nutrition protein, 3 tablespoons of hemp seeds.</p>
            <p style="margin:20px"><b>LUNCH</b>:  Leftover white bean and summer vegetable pasta or a large green salad with half a cup of beans or lentils, two tablespoons sliced almonds, vegetables of your choosing, and turmeric tahini dressing .</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  Apple with 2 tablespoons almond butter .</p>
            <p style="margin:20px"><b>DINNER</b>:   Butternut squash curry served over 1/2 cup cooked quinoa, steamed vegetables as desired.</p>
            <p style="margin:20px"><b>DESSERT</b>:  Dark chocolate  .</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 6" step="4">Day 6, Saturday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="6">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Banana and almond butter oats .</p>
            <p style="margin:20px"><b>LUNCH</b>:  Smoky avocado and jicama salad .</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>: 1 cup almond milk blended with Nutrition protein powder and a few ice cube.</p>
            <p style="margin:20px"><b>DINNER</b>:  Black bean and corn burgers, served with a small salad or steamed vegetables .</p>
            <p style="margin:20px"><b>DESSERT</b>: 2 raw vegan vanilla macaroons.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" step="7">Day 7, Sunday</v-stepper-step>
      <v-stepper-content color="#8B5E3C" step="7">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>BREAKFAST</b>: Smoothie of 1/2 frozen banana, 1 cup frozen peaches, 2 ice cubes, 3/4 cup almond milk, </p>
            <p style="margin:20px"><b>LUNCH</b>: Leftover black bean and corn burger, small salad .</p>
            <p style="margin:20px"><b>AFTERNOON SNACK</b>:  1/4 cup vegan trail mix of choice (or 2 tbsp raw almonds or cashews and 2 tbsp dried fruit).</p>
            <p style="margin:20px"><b>DINNER</b>:   1 cup cooked quinoa, brown rice, or millet, served with 1/2 chopped avocado, 1 cup steamed greens .</p>
            <p style="margin:20px"><b>DESSERT</b>:  1/2 cup chocomole .</p>
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