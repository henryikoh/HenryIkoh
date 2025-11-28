<template>
<div>
  <h2 class="text-4xl font-bold dark:text-white pb-9">Thoughts</h2>
  <ul v-if="page" class=" gap-8 md:gap-6 grid md:grid-cols-3">
				<li v-for="page in page" :key="page.slug">
					<ArticleCard :article="page" />
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