<template>
  <v-container class="contact-page" fluid>
    <v-row justify="center">
      <!-- Left Section: Contact Information -->
      <v-col cols="12" md="5">
        <h5 class="section-title text-white">TE ASTEPTAM LA O DISCUTIE</h5>
        <p class="section-description text-white">
          Thermo Expert este un lider pe piața soluțiilor de ferestre și uși de termopan, cu peste 10 ani de experiență în domeniu. Ne concentrăm pe oferirea celor mai eficiente soluții pentru izolare termică și fonică, cu un design modern și durabil. Fiecare proiect este tratat cu profesionalism și atenție la detalii, pentru a asigura satisfacția fiecărui client.
        </p>

        <v-row class="contact-info text-white" dense>
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
          <v-col cols="12" class="contact-item text-white">
            <v-icon color="blue" size="36" class=mx-5>mdi-email</v-icon>
            <div>
              <p>thermoexpertsolution@yahoo.com</p>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Section: Contact Form -->
      <v-col cols="12" md="5">
        <h5 class="section-title text-white">LASA-NE UN MAIL</h5>
        <v-form class="text-white">
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
  background-color: #0d1b2a;
  padding: 5%;
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
