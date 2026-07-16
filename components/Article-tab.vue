<template>
<div>
  <nuxt-link to="/thoughts" class="group inline-flex items-baseline gap-3 pb-9">
    <h2 class="text-4xl font-bold dark:text-white group-hover:underline underline-offset-4">Thoughts</h2>
    <span class="text-2xl text-gray-500 dark:text-gray-400 transition-transform group-hover:translate-x-1">&rarr;</span>
  </nuxt-link>
  <ul v-if="page" class=" gap-8 md:gap-6 grid md:grid-cols-3">
				<li v-for="(article, i) in page" :key="article.slug" v-reveal="(i % 3) * 90">
					<ArticleCard :article="article" />
				</li>

			</ul>
      <button v-if="hasMore" class="border border-gray-400 text-gray-900 dark:text-white mx-auto px-8 py-2 block mt-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" @click="loadmore">Load more</button>
      </div>
</template>

<script>
export default {
   data() {
      return {
        page: [],
        count: 6,
        totalArticles: 0
      }
    },
    async fetch() {
      // Get total count of articles
      const allArticles = await this.$content('articles').only(['slug']).fetch()
      this.totalArticles = allArticles.length

      this.page = await this.$content('articles')
			.without(['body'])
			.sortBy('createdAt', 'desc')
			.limit(this.count)
      // .where({tag: { $contains: ['']}}) // can be used for searching a tag
			.fetch()

    },
    computed: {
      hasMore() {
        return this.page.length < this.totalArticles
      }
    },
    methods: {
      async loadmore(){
        const articles = await this.$content('articles').without(['body']).sortBy('createdAt', 'desc').skip(this.count).limit(6).fetch()
        if (articles.length > 0) {
          this.page.push(...articles)
          this.count = this.count + 6
        }
      }
    }
}
</script>

<style>

</style>