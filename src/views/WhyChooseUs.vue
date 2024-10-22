<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  const appData = useAppData()
  const reasons = ref<{
    title: string,
    description: string
  }[]>([
    { title: 'Solutions Based', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Professional Developers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Modular, Adoptable Code', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Customizable', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  ])
</script>

<template>
  <Section
    id="why-choose-us"
    class="bg-surface-light"
  >
    <v-row
      align="start"
      class="px-12"
      justify="center"
      no-gutters
    >
      <v-col
        class="px-3 pb-3"
        cols="12"
        md="6"
      >
        <Subheading
          title="Why Choose Us"
        />
        <Divider align="left" />
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(reason, i) in reasons"
            :key="i"
          >
            <v-expansion-panel-title>
              <span v-text="reason.title" />
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card variant="flat">
                <v-card-text> {{ reason.description }} </v-card-text>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        class="px-3 py-1"
        cols="12"
        md="6"
      >
        <Subheading
          class="primary--text"
          title="Blog Posts"
        />
        <Divider align="left" />
        <template v-for="(post, _i) in appData.blogPosts" :key="_i">
          <Post :post="post" v-bind="post" />
        </template>
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>

</style>
