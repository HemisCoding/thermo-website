<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import thermoexpert from '@/assets/logo-thermo.png'
  // import BackgroundImg from '@/assets/homepage.jpg'
  import BackgroundImg from '@/assets/thermo-wallpaper.svg'


  
  const appData = useAppData()
</script>

<template>
  <Section
    id="hero"
    space="0"
    class="background-img"
  >
    <v-img
      :max-height="900"
      :src="BackgroundImg"
      cover
    >
      <v-theme-provider>
        <v-container class="fill-height px-5 py-6">
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
                  class="text-uppercase font-weight-bold text-blue text-animated"
                  color="white"
                />
                <Subheading
                 class="text-animated"
                  color="white"
                  title="Calitate, Durabilitate & Eficiență Energetică"
                />
                <Body
                  class="text-animated"
                  text="La Thermo Expert, oferim soluții personalizate pentru ferestre și uși de termopan, adaptate nevoilor fiecărui client. Fie că îți dorești izolare termică superioară, protecție fonică sau design modern, produsele noastre îți vor aduce confort și economii pe termen lung."
                />
                <Btn
                  class="text-blue font-weight-bold text-none mr-4 mb-1 text-animated"
                  color="white"
                  height="50px"
                  href="/contact"
                  target="_blank"
                  rounded
                >
                  <span v-text="`Contactează-ne`" />
                </Btn>
                <Btn
                  class="font-weight-bold text-none mr-4 mb-1 text-animated"
                  color="white"
                  height="50px"
                  href="/about"
                  target="_blank"
                  variant="outlined"
                  rounded
                >
                  <span v-text="`Despre Noi`" />
                </Btn>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                class="img-animated"
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
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.text-animated {
  animation: slideInFromLeft 1s ease-out forwards;
}

@keyframes slideInFromRight {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.img-animated {
  animation: slideInFromRight 1s ease-out forwards;
}
</style>
