<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-main>
    <section :style="mdAndUp? 'margin-top: 80px;': 'margin-top:40px;'">
      <RouterView />
    </section>
  </v-main>
</template>
