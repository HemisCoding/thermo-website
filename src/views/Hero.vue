<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import thermoexpert from '@/assets/thermo-expert.png'
  import BackgroundImg from '@/assets/background-website.jpg'


  
  const appData = useAppData()
</script>

<template>
  <Section
    id="hero"
    space="0"
  >
    <v-img
      :max-height="900"
      :src="BackgroundImg"
      cover
    >
      <v-theme-provider>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="99%"
          >
            <v-row align="center">
              <v-col
                class="text-white"
                cols="12"
                md="6"
              >
                <Heading
                  :title="`De ce Noi?`"
                  class="text-uppercase font-weight-bold"
                  color="white"
                />
                <Subheading
                  color="white"
                  title="Calitate, Durabilitate & Eficiență Energetică"
                />
                <Body
                  text="La Thermo Expert, oferim soluții personalizate pentru ferestre și uși de termopan, adaptate nevoilor fiecărui client. Fie că îți dorești izolare termică superioară, protecție fonică sau design modern, produsele noastre îți vor aduce confort și economii pe termen lung."
                />
                <Btn
                  class="text-primary font-weight-bold text-none mr-4 mb-1"
                  color="white"
                  height="50px"
                  href="/contact"
                  target="_blank"
                  rounded
                >
                  <span v-text="`Contactează-ne`" />
                </Btn>
               
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                  :src="thermoexpert"
                  max-width="650px"
                  min-height="365px"
                />
              </v-col>
            </v-row>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </Section>
</template>

<style lang="scss" scoped>

</style>
