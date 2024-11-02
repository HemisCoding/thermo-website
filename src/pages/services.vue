<script setup lang="ts">
  import OurServices from '@/views/OurServices.vue'
  import WhyChooseUs from '@/views/WhyChooseUs.vue'
  import FlexibleCallout from '@/views/FlexibleCallout.vue';
  import Info from '@/views/Info.vue'

  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'services',
  })
</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <OurServices />
        <FlexibleCallout />
        <Info />
      </v-col>
    </v-row>
  </section>

</template>
