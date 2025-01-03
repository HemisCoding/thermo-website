import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createVuetify } from 'vuetify'

export default createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      class: 'text-none',
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0096FF',
          offblack: '#333333',
          yellow: '#e6b004',
          
        },
      },
      dark: {},
    },
  },
})
