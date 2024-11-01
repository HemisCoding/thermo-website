<template>
  <v-container class="portfolio-showcase" fluid>
    <v-row>
      <!-- Meniul lateral -->
      <v-col cols="12" md="3" class="sidebar">
        <h5>Portofoliu Lucrări</h5>
        <h3 class="title">PROIECTELE NOASTRE RECENTE</h3>
        <v-divider class="divider"></v-divider>
        <p class="description">
          Descoperă gama noastră diversificată de lucrări și soluții de termopane, adaptate la nevoile fiecărui client.
        </p>
        <v-btn
          v-for="(category, index) in categories"
          :key="index"
          class="category-btn"
          :class="{ active: selectedCategory === category }"
          text
          @click="selectCategory(category)"
        >
          {{ category }}
        </v-btn>
      </v-col>

      <!-- Slider-ul de proiecte -->
      <v-col cols="12" md="9" class="carousel-section">
        <v-slide-group show-arrows class="projects-slider">
          <v-slide-item
            v-for="(project, index) in projects"
            :key="index"
            class="project-slide"
          >
            <v-responsive class="project-card">
              <v-img :src="project.image" class="project-image"></v-img>
              <h4 class="project-title">{{ project.title }}</h4>
              <p class="project-category">{{ project.category }}</p>
            </v-responsive>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>

    <!-- Secțiunea Contact Us -->
    <v-container class="contact-us-section" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <h4 class="contact-title">AVEȚI ÎNTREBĂRI? CONTACTAȚI-NE!</h4>
          <p class="contact-description">
            Suntem aici pentru a răspunde la toate întrebările tale. Ne poți contacta pentru detalii suplimentare și pentru a discuta despre proiectele tale.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-btn class="contact-btn" outlined color="white">CONTACTAȚI-NE</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortfolioShowcase',
  data() {
    return {
      categories: ['TOATE', 'DESIGN MODERN', 'CASE', 'APARTAMENTE', 'GARAJE', 'PHOTOGRAPHY', 'ECOMMERCE'],
      selectedCategory: 'ALL', // Categoria selectată implicit
      projects: [
        { image: 'path-to-image1.jpg', title: 'CIERRA VEGA', category: 'Wordpress' },
        { image: 'path-to-image2.jpg', title: 'PIERRE COX', category: 'Statistics' },
        { image: 'path-to-image3.jpg', title: 'ALDEN CANTRELL', category: 'Wordpress' },
        { image: 'path-to-image4.jpg', title: 'CRYSTAL MARTIN', category: 'Photography' },
        { image: 'path-to-image5.jpg', title: 'JOHN DOE', category: 'Branding' },
        { image: 'path-to-image6.jpg', title: 'JANE SMITH', category: 'Ecommerce' },
        // Adaugă mai multe proiecte după nevoie
      ]
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    }
  }
});
</script>

<style scoped>
.portfolio-showcase {
  background-color: #1a2b3c;
  padding: 4vh;
  color: white;
}

.sidebar {
  background-color: #2c3e50;
  padding: 20px;
  color: #ffffff;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.divider {
  width: 50px;
  height: 2px;
  background-color: #1e88e5;
  margin-top: 10px;
}

.description {
  color: #b0bec5;
  font-size: 14px;
  margin-top: 10px;
}

.category-btn {
  color: #b0bec5;
  border-radius: 4px;
  margin-top: 10px;
  text-transform: uppercase;
  width: 60%;
  background-color: transparent;
  font-weight: bold;
}

.category-btn.active {
  background-color: #1e88e5;
  color: white;
  border-color: #1e88e5;
}

.category-btn:hover {
  background-color: #1e88e5;
  color: white;
}

.carousel-section {
  padding: 20px;
}

.projects-slider {
  display: flex;
}

.project-slide {
  flex: 0 0 33%;
  padding: 10px;
  box-sizing: border-box;
}

.project-card {
  text-align: center;
  color: #1a2b3c;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}

.project-image {
  height: 200px;
  width: 100%;
  border-radius: 8px;
}

.project-title {
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}

.project-category {
  color: #777;
  font-size: 14px;
}

/* Stiluri pentru secțiunea Contact Us */
.contact-us-section {
  background-color: #42a5f5;
  padding: 40px 20px;
  color: white;
}

.contact-title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.contact-description {
  color: #e0e0e0;
  font-size: 14px;
  margin-bottom: 20px;
}

.contact-btn {
  border: 1px solid #b0bec5;
  color: white !important;
  border-radius: 5px;
  margin-top: 10px;
  text-transform: uppercase;
  width: 50%;
  background-color: transparent !important;
}

.contact-btn:hover {
  background-color: white;
  color: #42a5f5;
}

/* Media Queries pentru ecrane mici */
@media (max-width: 768px) {
  .project-slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 480px) {
  .project-slide {
    flex: 0 0 100%;
  }

  .title {
    font-size: 20px;
  }

  .description {
    font-size: 12px;
  }

  .category-btn {
    font-size: 12px;
    padding: 8px;
  }
}
</style>
