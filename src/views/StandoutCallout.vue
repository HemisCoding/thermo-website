<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
</script>

<template>
  <Section
    id="callout"
    class="bg-yellow"
  >
    <div class="justify-center align-center text-center">
      <Heading
        align="center"
        class="font-weight-bold"
        space="0"
        title="Varietate de Modele & Produse"
      />
      <Btn
        class="mt-10 mb-2 elevation-0"
        color="white text-primary"
        href="https://store.vuetifyjs.com/products/flairo-theme-pro"
        target="_blank"
        variant="flat"
        rounded
      >
        <span
          class="font-weight-black text-none"
          v-text="`Gama Noastra de Culori`"
        />
      </Btn>
    </div>
  </Section>
</template>

<style lang="scss" scoped>

</style>
