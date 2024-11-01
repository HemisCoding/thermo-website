<script setup lang="ts">
  import BlogSidebar from './BlogSidebar.vue'
  import BaseSidebar from './BaseSidebar.vue'
  import { useAppData } from '@/stores/mockup'
  import { useDisplay } from 'vuetify'
  import { useRoute } from 'vue-router'
  // import CompfireImg from '@/assets/campfire.svg'
  import logothermo from '@/assets/logo-thermo.png'


  interface Props {
    block: boolean
    search: boolean
    color?: string
  }

  const props = defineProps<Props>()
  const appData = useAppData()
  const route = useRoute()
  const { mdAndUp } = useDisplay()
  const drawer = ref(false)
  const items = ref([
    { name: 'Home', icon: 'mdi-home' },
    { name: 'About', icon: 'mdi-account-group' },
    { name: 'Services', icon: 'mdi-book-open-variant' },
    { name: 'Portfolio', icon: 'mdi-book' },
    { name: 'Contact', icon: 'mdi-phone' },
  ])

  const tabAttrs = computed(() => {
    const attrs : { height: string } = { height: '0px' }
    if (props.block) attrs.height = '80px'
    return attrs
  })

</script>

<template>
  <v-app-bar
    class="bg-blue"
    :height="mdAndUp ? '80px' : '40px'" 
    scroll-behavior="elevate"
    style="right: 0;"
  >
    <v-img
      :max-width="mdAndUp ? '100px' : '50px'" 
      :src="logothermo"
      class="hidden-sm-and-down"
      max-height="60px"
      min-height="60px"
    />
    <v-toolbar-title>
      <RouterLink
        :text="appData.title"
        class="text-white font-weight-bold text-h6"
        style="cursor: pointer; text-decoration: none;"
        to="/"
      />
    </v-toolbar-title>
    <v-spacer />
    <div v-if="mdAndUp">
      <v-tabs
        hide-slider
        optional
        v-bind="tabAttrs"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :exact="item.name === 'Home'"
          :ripple="false"
          :to="item.name === 'Home'? '/' : ('/' + item.name.toLowerCase())"
          class="font-weight-medium text-white"
          min-width="50px"
          selected-class="text-white"
          variant="text"
        >
          {{ item.name }}

          <v-icon
            v-if="item.icon && mdAndUp"
            :icon="item.icon"
            class="ms-2 text-white"
            size="small"
            end
          />
        </v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <BlogSidebar
        v-if="route.name === '/blog'"
        :drawer="drawer"
        @input="drawer = $event"
      />
      <BaseSidebar
        v-else
        :drawer="drawer"
        :items="items"
        @input="drawer = $event"
      />
    </div>
  </v-app-bar>
</template>
