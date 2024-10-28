<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const features = ref<{
    icon: string,
    title: string,
    text: string
  }[]>([
    {
      icon: 'mdi-flash',
      title: 'Rapiditate',
      text: 'Instalăm rapid și eficient, cu minim de disconfort pentru tine.',
    },
    {
      icon: 'mdi-cog',
      title: 'Izolare Termică de Top',
      text: 'Reducem costurile de energie prin tehnologii avansate de izolare.',
    },
    {
      icon: 'mdi-responsive',
      title: 'Durabilitate Garantată',
      text: 'Materiale de înaltă calitate care asigură o durată de viață îndelungată.',
    },
    {
      icon: 'mdi-face-agent',
      title: 'Estetică Modernă',
      text: 'Ferestre și uși care îmbină funcționalitatea cu un design contemporan.',
    },
  ])
</script>

<template>
  <Section
    id="welcome-feature"
    class="bg-grey-lighten-2"
  >
    <div class="justify-center align-center">
      <Heading
        :title="`Bine ai venit la ${appData.title}`"
        align="center"
        class="font-weight-bold"
      />
      <Divider
        align="center"
        color="primary"
      />
      <Body
        align="center"
        text="Alege-ne pentru confort și siguranță la superlativ."
      />
    </div>
    <v-row
    
      align="center"
      class="px-10"
      justify="center"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="12"
          md="3"
          class="pa-3 bg-grey-lighten-1"

        >
          <Feature
            class="pa-3 bg-grey-lighten-2"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
