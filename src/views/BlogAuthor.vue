<script setup lang="ts"> import TestimonyAvatar from '@/assets/testimony/testimony-1.jpg'
</script>

<template>
  <Section
    id="blog-header"
    class="px-3"
    space="5"
  >
    <Divider
      color="black"
      max-width="500"
    />
    <Author
      :src="TestimonyAvatar"
      bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      name="Martin Flox"
    />
  </Section>
</template>

<style lang="scss" scoped>

</style>
