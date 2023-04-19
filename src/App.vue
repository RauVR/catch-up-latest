<template>
  <div class="w-full">

    <div>
      <pv-menubar class="sticky bg-primary">
        <template #start>
          <pv-button label="CatchUp-inicio" icon="pi pi-bars" @click="toggleSidebar"/>
          <side-menu v-model:visible="sidebarVisible" v-on:source-selected="setSource"></side-menu>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>

    <div>
      <main-content v-if="errors" :articles="articles"></main-content>
      <unavailable-content v-else :errors="errors"></unavailable-content>
    </div>
    <footer-content/>
  </div>
</template>
<script>
import {NewsApiService} from "@/news/services/news-api.service";
import MainContent from "@/components/main-content.component.vue";
import SideMenu from "@/components/side-menu.component.vue";
import UnavailableContent from "@/components/unavailable-content.component.vue";
import FooterContent from "@/components/footer-content.component.vue";
import LanguageSwitcher from "@/components/language-switcher.component.vue";
export default {
  name: 'App',
  components: { LanguageSwitcher, FooterContent, SideMenu, UnavailableContent, MainContent},
  data() {
    return {
      sidebarVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    console.log('created');
    this.getArticlesForSource('bbc-news');
  },
  methods: {
    // Fetch Articles for selected Source
    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            this.articles = response.data.articles;
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push(e);
          });
    },
    // Fetch Articles for selected Source with Logo URL
    getArticlesForSourceWithUrl(source) {
      this.newsApi.getArticlesForSource(source.id)
          .then(response => {
            this.articles = response.data.articles;
            this.articles.map(article => article.source.urlToLogo =
                source.urlToLogo);
            console.log(response.data);
          })
          .catch(e => {
            this.errors.push();
          });
    },

    // On Source selected

    setSource( source ) {
      this.getArticlesForSourceWithUrl(source);
      this.sidebarVisible = !this.sidebarVisible;
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}
</script>
