<!-- <script setup lang="ts">
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
    class="gradient-background"
  >
    <div class="justify-center align-center text-white">
      <Heading
        :title="`Bine ai venit la ${appData.title}`"
        align="center"
        class="font-weight-bold text-white"
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
      class="px-4"
      justify="center"
    >
      <template v-for="(feature, _i) in features" :key="_i">
        <v-col
          cols="12"
          sm="6" 
          md="3" 
          class="pa-2" 
        >
          <v-card
            class="d-flex flex-column align-center justify-center"
            color="white"
            elevation="3" 
            hover
            outlined
          >
            <Feature
              class="card-design pa-3"
              v-bind="feature"
            />
          </v-card>
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.gradient-background {
  background-color: #403d3d;
}

.card-design {
  background-color: #403d3d !important;
}
</style>


<style lang="scss" scoped>
.gradient-background {
  background-color: #403d3d;
}

.card-design {
  background-color: #403d3d !important;
}
</style>
 -->
 <template>
  <v-container class="services-container" fluid>
    <v-row class="text-center" justify="center">
      <v-col cols="12" md="3" v-for="(service, index) in services" :key="index">
        <v-icon large class="service-icon">{{ service.icon }}</v-icon>
        <h4 class="service-title">{{ service.title }}</h4>
        <v-divider class="divider mx-auto"></v-divider>
        <p class="service-description">{{ service.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServicesSection',
  data() {
    return {
      services: [
  { 
    icon: 'mdi-flash', 
    title: 'RAPIDITATE', 
    description: 'Experiență fără bătăi de cap! Instalăm cu viteză și precizie pentru ca tu să te bucuri cât mai repede de confortul dorit. Fără deranj, fără stres!' 
  },
  { 
    icon: 'mdi-cog', 
    title: 'IZOLARE TERMICĂ DE TOP', 
    description: 'Economisește energie și bani! noastre păstrează căldura iarna și răcoarea vara – facturi mai mici și un ambient plăcut pe tot parcursul anului.' 
  },
  { 
    icon: 'mdi-pencil', 
    title: 'DURABILITATE', 
    description: 'O investiție care durează! Folosim doar materiale premium, rezistente la uzură, pentru ferestre și uși ce rezistă ani întregi, fără compromisuri la calitate.' 
  },
  { 
    icon: 'mdi-puzzle', 
    title: 'ESTETICĂ MODERNĂ', 
    description: 'Stilul întâlnește funcționalitatea! Ferestrele și ușile noastre sunt create să se potrivească perfect în case moderne, adăugând eleganță și rafinament spațiului tău.' 
  },
]

    };
  }
});
</script>

<style scoped>
.services-container {
  background-color: #0d1b2a; /* Fundal întunecat */
  padding: 15vh 10vw;
}

.service-icon {
  color: #1e88e5; /* Albastru pentru icon */
  margin-bottom: 10px;
}

.service-title {
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.divider {
  width: 40px;
  height: 5px;
  background-color: #1434A4	; /* Albastru pentru subliniere */
}

.service-description {
  color: #f2f4f5; /* Gri deschis pentru text */
  font-size: 13px;
  margin-top: 10px;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
