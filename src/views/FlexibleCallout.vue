<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
</script>

<template>
  <Section
    id="callout"
    class="bg-grey-lighten-3"
  >
    <div class="justify-center align-center text-center">
      <Heading
        align="center"
        class="font-weight-bold"
        title="Flexibilitate și Varietate în Alegere și Montaj"
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
          class="font-weight-medium text-none"
          v-text="`Contactează-ne`"
        />
      </Btn>
    </div>
  </Section>
</template>

<style lang="scss" scoped>

</style>
