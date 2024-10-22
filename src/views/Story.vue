<script setup lang="ts">
  import PiscillaDuPreezImg from '@/assets/about/priscilla-du-preez-XkKCui44iM0-unsplash.jpg'
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()

</script>

<template>
  <Section
    id="story"
    class="white pa-6"
    space="4"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="px-10"
        cols="12"
        md="6"
      >
        <Heading
          align="left"
          class="font-weight-bold py-3"
          title="Who are we?"
        />
        <Body
          align="left"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris non dui volutpat, dignissim lectus quis, posuere lectus. Aliquam condimentum consectetur ante nec efficitur. Nulla id enim pulvinar, tincidunt mauris et, fringilla leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec id est vitae neque auctor elementum vitae ut justo. Nam tristique scelerisque fermentum. Sed in tincidunt leo. Nullam eu imperdiet enim. Nam semper leo eu diam rutrum lacinia. Nam fermentum leo nec lacus efficitur, tincidunt fermentum dui blandit. Nunc mattis neque ac turpis sagittis gravida."
        />
        <Btn
          class="my-10 elevation-0 mx-1"
          color="black"
          href="https://store.vuetifyjs.com/products/flairo-theme-pro"
          target="_blank"
          theme="dark"
          variant="flat"
          rounded
        >
          <span
            class="font-weight-black text-none"
            v-text="`Purchase ${appData.title}`"
          />
        </Btn>
        <Btn
          class="my-10 elevation-0 mx-1"
          variant="flat"
          rounded
        >
          <span
            class="font-weight-black text-white"
            v-text="'Learn More'"
          />
        </Btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :height="mdAndUp ? '500px' : '200px'"
          :min-height="mdAndUp ? '500px' : '200px'"
          :min-width="mdAndUp ? '600px' : '300px'"
          :src="PiscillaDuPreezImg"
          cover
        />
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
