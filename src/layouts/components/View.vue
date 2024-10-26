<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-main>
    <section :style="mdAndUp? 'margin-top: 150px;': 'margin-top:20px;'">
      <RouterView />
    </section>
  </v-main>
</template>
