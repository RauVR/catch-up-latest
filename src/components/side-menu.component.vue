<template>
  <pv-sidebar v-model:visible="visible">
    <div v-for="source in sources" class="m-4">
      <div @click="onSourceSelected(source)" class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center mr-2"><pv-avatar :image="source.urlToLogo" shape="circle" :aria-label="source.name"></pv-avatar></span>
        <span class="flex align-items-center justify-content-center">{{ source.name }}</span>
      </div>
    </div>
  </pv-sidebar>
</template>
<script>
import { NewsApiService } from "@/news/services/news-api.service";

export default {
  name: "side-menu",
  props: {
    visible: Boolean
  },
  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    };
  },
  created() {
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources;
          this.sources.map(source => source.urlToLogo =
              this.newsApi.getUrlToLogo(source));
          console.log('data: ');
          console.log(response.data.sources);
        })
        .catch(e => {
          this.errors.push(e);
        })
  },
  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    }
  }
}
</script>
<style scoped>
</style>