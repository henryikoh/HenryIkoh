<template>
  <div class="dark:bg-dark">
		    <Navbar />

		<article class=" w-11/12 md:w-4/5 mx-auto">
			<h1 class="font-bold pt-5 md:pt-10 text-4xl md:text-7xl wrapa dark:text-white">{{ page.title }}</h1>
			<div class="info wrapa">
				<div class="flex items-baseline pb-8 pt-2">
					<p class="md:text-2xl text-gray-800 dark:text-white">{{ formatDate(page.createdAt) }}</p>
					<div class="flex gap-3 md:pl-6 pl-4">
						<p v-for="tag in page.tag" :key="tag" class="md:text-xl text-gray-500">{{ tag }}</p>
					</div>
				</div>
			</div>
			<img class=" z-0 mb-10 object-center object-cover h-60 w-full md:h-[600px]" :src="page.cover" alt="" />
			<nuxt-content class=" prose prose-gray dark:prose-p:text-white dark:prose-invert prose-base lg:prose-lg xl:prose-xl prose-li:marker:text-gray-900  dark:prose-li:marker:text-gray-200 prose-ul:list-outside   prose-p:overflow-hidden prose-p:overflow-ellipsis 	 mx-auto  " :document="page" />
		</article>
		<Footer />
	</div>
</template>

<script>
export default {
async asyncData({ $content, params }) {
		const pages = await $content('projects')
			.where({ slug: params.slug })
			.fetch()
		const page = pages[0]
		return {
			page,
		}
	},
	head() {
		return {
			title: this.page.title,
			titleTemplate: '%s - Henry Ikoh',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.page.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.page.title,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.page.description,
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: 'https://www.henryikoh.com' + this.page.cover,
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: 'https://www.henryikoh.com/projects/' + this.page.slug,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.page.title + ' - Henry Ikoh',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					hid: 'twitter:image:src',
					name: 'twitter:image:src',
					content: 'https://www.henryikoh.com' + this.page.cover,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.page.description,
				},

			],
			link: [{
      rel: 'canonical',

      href: 'https://www.henryikoh.com/projects/' + this.page.slug,
    },],
		}
	},
	created(){
		this.$gtag.pageview({ page_path: this.page.slug, page_title:this.page.title, page_location:this.$route })
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>

<style scoped>
</style>
