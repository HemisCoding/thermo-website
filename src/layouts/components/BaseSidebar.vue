<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'

  interface Props {
    drawer?: boolean
    items: {
      icon: string
      name : string
    }[] | []
  }

  withDefaults(defineProps<Props>(), {
    drawer: false,
    items: () => { return [] },
  })

  defineEmits(['input'])

  const appData = useAppData()
</script>

<template>
  <v-navigation-drawer
    :elevation="20"
    :model-value="drawer"
    location="right"
    style="height: 100vh;"
    fixed
    hide-overlay
    @input="$emit('input', $event)"
  >
    <v-list
      :items="items"
      dense
      items-props
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.name"
        :exact="item.name === 'Home'"
        :ripple="false"
        :to="item.name === 'Home'? '/' : item.name"
        :value="item.name"
        selected-class="text-white"
      >
        <template #append>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title> {{ item.name }} </v-list-item-title>
      </v-list-item>
    </v-list>
    <template #append>
      <v-btn
        :href="`tel:${appData.contact.phone.value}`"
        :ripple="false"
        variant="text"
      >
        <v-icon
          :icon="appData.contact.phone.icon"
          class="mr-2"
        />
        <span
          v-text="appData.contact.phone.value"
        />
      </v-btn>

      <v-btn
        :href="`mailto:${appData.contact.email.value}`"
        :ripple="false"
        height="60px"
        variant="text"
        tile
      >
        <v-icon
          :icon="appData.contact.email.icon"
          class="mr-2"
        />
        <span
          v-text="appData.contact.email.value"
        />
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>

</style>
