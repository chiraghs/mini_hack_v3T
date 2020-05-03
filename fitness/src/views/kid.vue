<template>
    <v-stepper v-model="e6" vertical dark>
      <v-stepper-step color="#8B5E3C" :complete="e6 > 1" step="1">
        Day 1, Monday
      </v-stepper-step>
  
      <v-stepper-content step="1" color="#8B5E3C">
        <v-card color="grey darken-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 2">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 2" step="2">Day 2, Tuesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 3">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 3" step="3">Day 3, Wednesday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 4">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 4" step="4">Day 4, Thursday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="4">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 5">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 5" step="5">Day 5, Friday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="5">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" :complete="e6 > 6" step="4">Day 6, Saturday</v-stepper-step>
  
      <v-stepper-content color="#8B5E3C" step="6">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
        </v-card>
        <v-btn color="#8B5E3C" @click="e6 = 6">Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
  
      <v-stepper-step color="#8B5E3C" step="7">Day 7, Sunday</v-stepper-step>
      <v-stepper-content color="#8B5E3C" step="7">
        <v-card color="grey lighten-1" class="mb-12" height="200px">
            <p style="margin:20px"><b>WAKING UP</b>:  A glass of warm low fat milk.</p>
            <p style="margin:20px"><b>BREAKFAST</b>: Vegetable egg omelet with onion, tomato, spinach, whole grain bread slices, one apple</p>
            <p style="margin:20px"><b>MID MORNING</b>:  Fruit salad with strawberry flavored low-fat yoghurt</p>
            <p style="margin:20px"><b>LUNCH</b>: Lean chicken- capsicum-onion -zucchini stir fry - whole grain roll, mango lassi.</p>
            <p style="margin:20px"><b>EVENING</b>: Spinach- mushroom-peas cutlet, a handful of almonds, fresh mixed fruit juice (Apple Guava, lime)</p>
            <p style="margin:20px"><b>DINNER</b>: Whole multigrain phulkas, dal, paneer-peas-mushroom mixed vegetable curry.</p>
            <p style="margin:20px"><b>BED-TIME</b>: A glass of warm low fat milk.</p>
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