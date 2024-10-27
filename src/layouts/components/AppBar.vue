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
    if (props.block) attrs.height = '100px'
    return attrs
  })

</script>

<template>
  <v-app-bar
    class="bg-offblack"
    :height="mdAndUp ? '100px' : '50px'" 
    scroll-behavior="elevate"
    style="right: 0;"
  >
    <v-img
      :max-width="mdAndUp ? '120px' : '80px'" 
      :src="logothermo"
      class="hidden-sm-and-down"
      max-height="60px"
      min-height="60px"
    />
    <v-toolbar-title>
      <RouterLink
        :text="appData.title"
        class="text-grey font-weight-bold text-h6"
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
          class="font-weight-medium text-grey"
          min-width="100px"
          selected-class="text-primary"
          variant="text"
        >
          {{ item.name }}

          <v-icon
            v-if="item.icon && mdAndUp"
            :icon="item.icon"
            class="ms-2 text-grey"
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
