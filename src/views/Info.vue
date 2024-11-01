<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { useAppData } from '@/stores/mockup'

  const { mdAndUp } = useDisplay()
  const appData = useAppData()
</script>

<template>
  <Section class="footer text-white">
    <v-row
      align="start"
      class="px-12"
      justify="center"
      no-gutters
    >
      <v-col
        class="px-3"
        cols="12"
        md="6"
      >
        <Subheading :title="`Despre Noi`" color="white" />
        <Divider
          align="left"
          color="white"
        />
        <Body text="Thermo Expert este un lider pe piața soluțiilor de ferestre și uși de termopan, cu peste 10 ani de experiență în domeniu. Ne concentrăm pe oferirea celor mai eficiente soluții pentru izolare termică și fonică, cu un design modern și durabil. Fiecare proiect este tratat cu profesionalism și atenție la detalii, pentru a asigura satisfacția fiecărui client." />
        <Body text="Alege-ne pentru calitate superioară, eficiență și servicii personalizate, adaptate nevoilor tale." />
      </v-col>
      <!-- <v-col
        v-if="mdAndUp"
        class="px-3"
        cols="3"
      >
        <Subheading color="white" title="Recent News" />
        <Divider
          align="left"
          color="white"
        />
        <template v-for="(news, _i) in appData.recentNews" :key="`news-text-${_i}`">
          <Body
            :text="news"
            class="py-3"
            space="0"
            tag="div"
          />
          <v-divider />
        </template>
      </v-col> -->
      <!-- <v-col
        v-if="mdAndUp"
        class="px-3"
        cols="3"
      >
        <Subheading color="white" title="Recent Posts" />
        <Divider
          align="left"
          color="white"
        />
        <template v-for="(post, i) in appData.recentPosts" :key="`post-row-${i}`">
          <div class="d-flex">
            <div>
              <Avatar
                v-if="mdAndUp"
                :key="`post-date-${i}`"
                :text="post.date"
                class="ma-2"
                color="primary"
                size="60"
                outlined
              />
            </div>

            <Body
              :key="`post-text-${i}`"
              :text="post.text"
              class="py-3"
              space="0"
              tag="span"
            />
          </div>
          <v-divider max-width="100%" />
        </template>
      </v-col> -->
      <v-col
      class="px-3"
        cols="12"
        md="1"
        ></v-col>
      <v-col
        class="px-3"
        cols="12"
        md="3"
      >
        <Subheading color="white" title="Contactează-ne" />
        <Divider
          align="left"
          color="white"
        />
        <Subtitle
          title="Phone:"
          weight="bold"
        />
        <Body
          space="2"
          text="+40 7xx xxx xxx"
        />
        <Subtitle
          title="Email:"
          weight="bold"
        />
        <Body
          :text="`email@${appData.title.toLowerCase()}.com`"
          space="2"
        />
        <Subtitle
          title="Twitter:"
          weight="bold"
        />
        <Subheading color="white" title="Urmărește-ne" />
        <Divider
          align="left"
          color="white"
        />
        <Btn
          v-for="media in appData.socialLinks"
          :key="media.link"
          :color="media.color"
          :href="media.link"
          :icon="media.icon"
          class="ma-1"
          min-width="40px"
          target="_blank"
          variant="flat"
          width="40px"
        />
      </v-col>
    </v-row>
  </Section>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #181818		;
}
</style>
