<script setup lang="ts">
  import ClayBanksImg from '@/assets/about/clay-banks-LjqARJaJotc-unsplash.jpg'
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()

</script>

<template>
  <Section
    id="story-alt"
    class="bg-grey-lighten-4 pa-6"
    space="8"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          :height="mdAndUp ? 500 : 200"
          :min-height="mdAndUp ? 500 : 200"
          :min-width="mdAndUp ? 600 : 300"
          :src="ClayBanksImg"
          cover
        />
      </v-col>
      <v-col
        class="px-10"
        cols="12"
        md="6"
      >
        <Heading
          align="left"
          class="font-weight-bold py-3"
          title="Our Values"
        />
        <Body
          text="Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue."
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
          depressed
          rounded
        >
          <span
            class="font-weight-black text-white"
            v-text="'Learn More'"
          />
        </Btn>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
