<!-- <script setup lang="ts">
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
      <v-row align="start" justify="center">
        <v-col
          class="px-12"
          cols="6"
          sm="6"
        >
          <Subheading
            align="left"
            class="primary--text"
            title="Contact"
          />
          <Subtitle
            title="Company"
            weight="bold"
          />
          <Body
            space="2"
            text="Thermo Expert"
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
          cols="6"
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

</style> -->
<template>
  <v-container class="contact-page" fluid>
    <v-row justify="center">
      <!-- Left Section: Contact Information -->
      <v-col cols="12" md="5">
        <h5 class="section-title">TE ASTEPTAM LA O DISCUTIE</h5>
        <p class="section-description">
          Thermo Expert este un lider pe piața soluțiilor de ferestre și uși de termopan, cu peste 10 ani de experiență în domeniu. Ne concentrăm pe oferirea celor mai eficiente soluții pentru izolare termică și fonică, cu un design modern și durabil. Fiecare proiect este tratat cu profesionalism și atenție la detalii, pentru a asigura satisfacția fiecărui client.
        </p>

        <v-row class="contact-info" dense>
          <!-- Address Information -->
          <v-col cols="12" class="contact-item">
            <v-icon color="blue" size="36" class=mx-5>mdi-map-marker</v-icon>
            <div>
              <p>Onesti, Bacau</p>
              <p>Strada Republicii 25</p>
            </div>
          </v-col>
          <v-divider class="my-3"></v-divider>

          <!-- Phone Information -->
          <v-col cols="12" class="contact-item">
            <v-icon color="blue" size="36" class=mx-5>mdi-phone</v-icon>
            <div>
              <p>+40 748 905 981</p>
            </div>
          </v-col>
          <v-divider class="my-3"></v-divider>

          <!-- Email Information -->
          <v-col cols="12" class="contact-item">
            <v-icon color="blue" size="36" class=mx-5>mdi-email</v-icon>
            <div>
              <p>thermoexpertsolution@yahoo.com</p>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Section: Contact Form -->
      <v-col cols="12" md="5">
        <h5 class="section-title">LASA-NE UN MAIL</h5>
        <v-form>
          <v-text-field label="Nume" outlined></v-text-field>
          <v-text-field label="Email" outlined></v-text-field>
          <v-text-field label="Subiect" outlined></v-text-field>
          <v-textarea label="Descriere" outlined></v-textarea>
          <v-btn outlined color="blue" class="send-message-btn">TRIMITE MESAJ</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
.contact-page {
  padding: 40px 0;
  background-color: #f5f5f5;
}

.section-title {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.section-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
}

.contact-info {
  margin-top: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.contact-item v-icon {
  margin-right: 15px;
}

.v-divider {
  background-color: #ccc;
}

.send-message-btn {
  margin-top: 20px;
}
</style>
