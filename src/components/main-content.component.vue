<template>
  <div v-for="article in articles">
    <article-card :article="article"></article-card>
  </div>
</template>
<script>
import ArticleCard from "@/components/article-card.component.vue";
export default {
  name: "main-content",
  components: {ArticleCard},
  props: {
    articles: Array
  }
}
</script>
<style scoped>
</style>