<template>
<div>
  <ul v-if="page" class=" gap-8 md:gap-6 grid md:grid-cols-3">
				<li v-for="page in page" :key="page.slug">
					<ArticleCard :article="page" />
				</li>
        
			</ul>
      <button class=" border text-white mx-auto px-8 py-2 block mt-10 rounded" @click="loadmore">Load more</button>
      </div>
</template>

<script>
export default {
   data() {
      return {
        page: [],
        count: 6
      }
    },
    async fetch() {
      this.page = await this.$content('articles')
			.without(['body'])
			.sortBy('createdAt', 'desc')
			.limit(6)

      // .where({tag: { $contains: ['']}}) // can be used for searching a tag
			.fetch()
		
    },
    methods: {
      async loadmore(){
        const articles = await this.$content('articles').without(['body']).sortBy('createdAt', 'desc').skip(this.count).limit(6).fetch()
        console.log(articles)
        this.page.push(...articles)
        this.count = this.count + 6
      }
    }
}
</script>

<style>

</style>