<script setup lang="ts">
</script>

<template>
  <v-text-field
    dense
    outlined
    v-bind="$attrs"
  >
    <template #append-outer>
      <slot

        name="append-outer"
      />
    </template>
  </v-text-field>
</template>

<style lang="sass">
  //
</style>
