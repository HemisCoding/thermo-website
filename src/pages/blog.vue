<script setup lang="ts">
  import BlogAsset from '@/views/BlogAsset.vue'
  import BlogAuthor from '@/views/BlogAuthor.vue'
  import BlogExcerpt from '@/views/BlogExcerpt.vue'
  import BlogExcerptLeftImg from '@/views/BlogExcerptLeftImg.vue'
  import BlogExcerptRightImg from '@/views/BlogExcerptRightImg.vue'
  import BlogExcerptShort from '@/views/BlogExcerptShort.vue'
  import BlogHeader from '@/views/BlogHeader.vue'
  import BlogQuote from '@/views/BlogQuote.vue'
  import RelatedBlogPosts from '@/views/RelatedBlogPosts.vue'

  interface Props {
    id?: string
  }

  withDefaults(defineProps<Props>(), {
    id: 'blog',
  })
</script>

<template>
  <section :id="id" v-bind="$attrs">
    <v-row no-gutters>
      <v-col cols="12">
        <BlogAsset />
        <BlogHeader />
        <BlogExcerpt />
        <BlogQuote />
        <BlogExcerptLeftImg />
        <BlogExcerptShort />
        <BlogExcerptRightImg />
        <BlogAuthor />
        <RelatedBlogPosts />
      </v-col>
    </v-row>
  </section>

</template>
