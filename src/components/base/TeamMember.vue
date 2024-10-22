<script setup lang="ts">
  interface Props {
    name: string
    src: string
    title: string

    /* TODO: implement validator */
    // validator: (val) => {
    //       return val.every(v => ({}).hasOwnProperty.call(v, 'link') && ({}).hasOwnProperty.call(v, 'icon'))
    // }
    socialLinks : {
      link: string
      icon: string
    }[]
  }
  defineProps<Props>()
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="pa-3"
        max-height="400"
        variant="text"
        width="auto"
        border
        tile
        v-bind="props"
      >
        <v-img
          :src="src"
          height="100%"
          min-height="300"
          cover
        >
          <v-overlay
            :model-value="isHovering"
            class="d-flex transition-fast-in-fast-out v-card--reveal align-center justify-center"
            opacity="0.8"
            scrim="surface-light"
            contained
          >
            <v-btn
              v-for="site in socialLinks"
              :key="site.link"
              :href="site.link"
              class="mx-2"
              size="50"
              target="_blank"
              variant="outlined"
              rounded
            >
              <v-icon
                :icon="site.icon"
                class="mx-0"
                size="40"
              />
            </v-btn>
          </v-overlay>
        </v-img>
        <v-card-text
          class="pt-3"
          style="position: relative;"
        >
          <div
            class="font-weight-bold mb-2 text-left"
            v-text="name"
          />
          <div
            class="text-left"
            v-text="title"
          />
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped>

</style>
