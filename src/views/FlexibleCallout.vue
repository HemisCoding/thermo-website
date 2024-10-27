<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
</script>

<template>
  <Section
    id="callout"
    class="bg-grey-darken-3"
  >
    <div class="justify-center align-center text-center mx-1">
      <Heading
        align="center"
        class="font-weight-bold ma-*"
        color="grey-lighten-2"
        title="Flexibilitate & Varietate"
      />
      <Body
        align="center"
        text="Oferim o gamă largă de culori și dimensiuni personalizate, adaptate nevoilor tale. Montajul rapid și eficient îți asigură confortul dorit, fără compromisuri."
      />
      <Btn
        color="offblack"
        href="https://store.vuetifyjs.com/products/flairo-theme-pro"
        target="_blank"
        dark
        rounded
      >
        <span
          class="text-primary font-weight-bold text-none"
          v-text="`Contactează-ne`"
        />
      </Btn>
    </div>
  </Section>
</template>

<style lang="scss" scoped>

</style>
