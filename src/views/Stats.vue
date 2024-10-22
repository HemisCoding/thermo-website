<script setup lang="ts">
  const stats = ref<{
    text: string
    statNumber: number | string
    outlined?: boolean
    color: string
  }[]>([
    { text: 'Awards Won', statNumber: '5', outlined: true, color: 'white' },
    { text: 'Projects', statNumber: '322', color: 'white' },
    { text: 'Positive Reviews', statNumber: '2182', outlined: true, color: 'white' },
    { text: 'Revenue', statNumber: '$5M', color: 'white' },
  ])
</script>

<template>
  <Section
    id="stats"
    class="bg-primary"
  >
    <v-row
      align="center"
      class="px-10"
      justify="center"
    >
      <template v-for="(stat, _i) in stats" :key="_i">
        <v-col
          class="text-center"
          cols="12"
          md="3"
          sm="6"
        >
          <Stat
            class="pa-3"
            v-bind="stat"
            color="white"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
