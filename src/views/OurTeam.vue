<script setup lang="ts">
  const getImgUrl = (imagePath : string) => new URL(`${imagePath}`, import.meta.url).href

  const teamMembers = ref([
    {
      title: 'CEO',
      name: 'Neil Barnett',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg'),
    },
    {
      title: 'COO',
      name: 'Sherri Cayne',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'),
    },
    {
      title: 'CTO',
      name: 'Erica Baker',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/dan-ROJFuWCsfmA-unsplash.jpg'),
    },
    {
      title: 'CFO',
      name: 'Wesley Graves',
      socialLinks: [
        { link: 'https://linkedin.com', icon: 'mdi-linkedin' },
        { link: 'https://twitter.com', icon: 'mdi-twitter' },
        { link: 'mailto:sample@example.com', icon: 'mdi-email' },
      ],
      src: getImgUrl('../assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg'),
    },
  ])
</script>

<template>
  <Section
    id="our-team"
    class="background-section text-white"

  >
    <div class="justify-center align-center text-white">
      <Heading
        align="center"
        class="font-weight-bold text-white"
        title="Echipa Noastră"
      />
      <Divider
        align="center"
        color="primary"
      />
      <Body
        align="center"
        text="Cu peste 10 ani de experiență, echipa noastră de profesioniști îți oferă soluții de calitate pentru orice proiect de termopan."
      />
    </div>
    <v-row
      align="center"
      class="px-10"
      justify="center"
    >
      <template v-for="(employee, _i) in teamMembers" :key="_i">
        <v-col
          cols="12"
          md="3"
          sm="6"
        >
          <TeamMember class="card" v-bind="employee" />
        </v-col>
      </template>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.background-section {
  background-color: #181818	;
}

.card {
  border: 1px solid white;
  border-radius: 3px;
}
</style>
