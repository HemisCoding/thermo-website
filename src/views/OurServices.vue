<script setup lang="ts">
  const features = ref(
    [
      {
        icon: 'mdi-flash',
        title: 'Montaj Rapid',
        text: 'Îți livrăm calitate și eficiență, cu un montaj rapid și profesional, astfel încât să te bucuri de noile ferestre sau uși cât mai repede.',
      },
      {
        icon: 'mdi-cog',
        outlined: true,
        title: 'Aranjare Completă',
        text: 'Transformă-ți casa după gustul tău! Oferim soluții de personalizare adaptate stilului tău, fie că dorești finisaje moderne sau clasice.',
      },
      {
        icon: 'mdi-responsive',
        avatarColor: 'offblack',
        outlined: true,
        title: 'Design Adaptabil',
        text: 'Fiecare proiect este creat pentru a se integra perfect în spațiul tău, oferind confort și eleganță în orice locuință sau birou.',
      },
      {
        icon: 'mdi-face-agent',
        title: 'Suport Prietenos',
        text: 'Echipa noastră de suport e mereu la dispoziția ta pentru a răspunde întrebărilor și a oferi asistență înainte, în timpul și după instalare.',
      },
      {
        icon: 'mdi-auto-fix',
        title: 'Design de Impact',
        avatarColor: '#0077b5',
        outlined: true,
        text: 'Alegem cu grijă materialele și finisajele pentru un design care să impresioneze și să reziste în timp.',
      },
      {
        icon: 'mdi-calendar',
        title: 'Program Flexibil',
        text: 'Ne adaptăm programul pentru a răspunde nevoilor tale și a facilita instalarea ferestrelor sau ușilor în cele mai convenabile momente.',
      },
      {
        icon: 'mdi-magnify',
        title: 'Optimizare Energetică',
        avatarColor: '#0077b5',
        text: 'Ferestrele și ușile noastre sunt gândite pentru a îmbunătăți eficiența energetică a locuinței tale, reducând costurile de încălzire și răcire.',
      },
      {
        icon: 'mdi-thought-bubble',
        title: 'Consultanță Personalizată',
        text: 'Oferim sfaturi și recomandări pentru a alege produsele potrivite, astfel încât să obții exact ce ți-ai dorit, fără compromisuri.',
      },
    ]
  )
</script>

<template>
  <Section
    id="our-services"
    space="16"
  >
    <div class="justify-center align-center">
      <Heading
        align="center"
        class="font-weight-bold"
        title="Serviciile Noastre"
      />
      <Divider
        align="center"
        color="primary"
      />
    </div>
    <v-row
      align="stretch"
      class="px-3"
      justify="center"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="12"
          lg="3"
          md="6"
        >
          <FeatureAlt
            class="pa-1"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
