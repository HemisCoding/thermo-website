<script setup lang="ts">
  import AppBar from '@/layouts/components/AppBar.vue'
  import SystemBar from '@/layouts/components/SystemBar.vue'
  import View from '@/layouts/components/View.vue'
  import { useDisplay } from 'vuetify'

  const { mdAndUp } = useDisplay()

</script>

<template>
  <v-app>
    <SystemBar v-if="mdAndUp" />
    <AppBar
      block
      search
    />
    <View />
  </v-app>
</template>
