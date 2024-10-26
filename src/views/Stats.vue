<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = ref([
  { text: 'Awards Won', statNumber: 5, outlined: true, color: 'white' },
  { text: 'Projects', statNumber: 322, color: 'white' },
  { text: 'Positive Reviews', statNumber: 2182, outlined: true, color: 'white' },
  { text: 'Revenue', statNumber: 5000000, color: 'white', isCurrency: true },
])

// Add a reactive property for each stat to hold the animated value
const animatedStats = ref(stats.value.map(stat => ({
  ...stat,
  currentNumber: 0 // Start from 0 for the animation
})))

// Function to animate count-up
const countUp = (target: number, duration = 2000) => {
  const start = 0
  const range = target - start
  let current = start
  const increment = Math.ceil(range / (duration / 50)) // Adjust this for smoother animation

  return new Promise(resolve => {
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
        resolve(current)
      }
      // Update the current number
      animatedStats.value = animatedStats.value.map(stat =>
        stat.statNumber === target ? { ...stat, currentNumber: current } : stat
      )
    }, 50) // Adjust the interval time for speed
  })
}

onMounted(() => {
  animatedStats.value.forEach(stat => countUp(stat.statNumber))
})
</script>

<template>
  <Section id="stats" class="bg-primary">
    <v-row align="center" class="px-10" justify="center">
      <template v-for="(stat, _i) in animatedStats" :key="_i">
        <v-col class="text-center" cols="12" md="3" sm="6">
          <Stat
            class="pa-3"
            :text="stat.text"
            :outlined="stat.outlined"
            :color="stat.color"
            :stat-number="stat.isCurrency ? `$${stat.currentNumber.toLocaleString()}` : stat.currentNumber"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>
