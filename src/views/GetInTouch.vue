<script setup lang="ts">
  import { useAppData } from '@/stores/mockup'
  import { useDisplay } from 'vuetify'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()
  const name = ref('')
  const email = ref('')
  const website = ref('')
  const subject = ref('')
  const message = ref('')
</script>

<template>
  <Section
    id="get-in-touch"
    class="bg-surface-light"
    space="20"
  >
    <v-container fluid>
      <v-row align="start">
        <v-col
          class="px-12"
          cols="3"
          sm="6"
        >
          <Subheading
            align="left"
            class="font-weight-black primary--text"
            title="GET IN TOUCH"
          />
          <Body
            align="left"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet mauris non venenatis auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per."
          />
          <Subheading
            align="left"
            class="primary--text"
            title="Contact Information"
          />
          <Subtitle
            title="Company"
            weight="bold"
          />
          <Body
            space="2"
            text="Company Name A"
          />
          <Subtitle
            title="Email"
            weight="bold"
          />
          <Body
            :text="appData.contact.email.value"
            space="2"
          />
          <Subtitle
            title="Phone"
            weight="bold"
          />
          <Body
            :text="appData.contact.phone.value"
            space="2"
          />
        </v-col>
        <v-col
          cols="9"
          sm="6"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
            >
              <TextField
                v-model="name"
                :class="mdAndUp ? 'mr-1' : ''"
                label="Name"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <TextField
                v-model="email"
                :class="mdAndUp ? 'ml-1' : ''"
                label="Email"
              />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col
              cols="12"
              md="6"
            >
              <TextField
                v-model="website"
                :class="mdAndUp ? 'mr-1' : ''"
                label="Website"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <TextField
                v-model="subject"
                :class="mdAndUp ? 'ml-1' : ''"
                label="Subject"
              />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-textarea
              v-model="message"
              label="Message"
              outlined
            />
          </v-row>
          <v-row no-gutters>
            <Btn
              class="px-12"
              color="primary"
              depressed
            >
              <span
                class="font-weight-bold"
                v-text="'Submit Message'"
              />
            </Btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Section>
</template>

<style lang="scss" scoped>

</style>
