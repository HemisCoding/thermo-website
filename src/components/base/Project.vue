<script setup lang="ts">
  interface Props {
    id: string | number
    title: string
    subtitle: string
    src: string
    date: string
    description: string
    tags: string[]
    category: string
  }

  defineProps<Props>()
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="px-auto"
      max-height="400"
      variant="flat"
      width="auto"
      tile
      v-bind="props"
    >
      <v-img
        :src="src"
        max-height="300"
        min-height="300"
        cover
      >
        <v-overlay
          :model-value="isHovering"
          class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center text-offblock text-center"
          opacity="0.8"
          scrim="primary"
          contained
        >
          <v-btn
            :to="`/project/${id}`"
            class="ml-n2 mb-2"
            size="50"
            variant="tonal"
            rounded
          >
            <v-icon
              class="mx-0"
              color="primary"
              icon="mdi-link"
              size="40"
            />
          </v-btn>
          <div
            class="font-weight-black mb-2"
            v-text="title"
          />
          <div
            class="mb-2"
            v-text="subtitle"
          />
        </v-overlay>
      </v-img>
    </v-card>
  </v-hover>
</template>

<style lang="scss" scoped>

</style>
