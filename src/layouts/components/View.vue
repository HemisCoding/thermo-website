<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()
</script>

<template>
  <v-main>
    <section :style="mdAndUp? 'margin-top: 210px;': 'margin-top:50px;'">
      <RouterView />
    </section>
  </v-main>
</template>
