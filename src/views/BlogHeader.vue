<script setup lang="ts">
</script>

<template>
  <Section
    id="blog-header"
    class="px-3"
    space="4"
  >
    <Heading
      :date="new Date().toLocaleDateString()"
      author="Martin Flox"
      color="offblock"
      comment-count=""
      size="text-h5"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
  </Section>
</template>

<style lang="scss" scoped>

</style>
