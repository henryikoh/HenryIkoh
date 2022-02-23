<template>
  <div class="dark:bg-dark">
		    <Navbar />

		<article class=" w-11/12 md:w-4/5 mx-auto">
			<h1 class="font-bold pt-5 md:pt-10 text-4xl md:text-7xl wrapa dark:text-white">{{ page.title }}</h1>
			<div class="info wrapa">
				<div class="flex items-baseline pb-8 pt-2">
					<p class="md:text-2xl text-gray-800 dark:text-white">{{ formatDate(page.createdAt) }}</p>
					<p class="md:pl-6 pl-4 md:text-2xl text-gray-500">{{ page.readingTime }}</p>
				</div>
			</div>
			<img class=" z-0 mb-10 object-center object-cover h-60 w-full md:h-[700px]" :src="page.cover" alt="" />
			<nuxt-content class=" prose prose-gray dark:prose-invert prose-lg lg:prose-lg xl:prose-xl prose-li:overflow-hidden prose-li:overflow-ellipsis prose-p:overflow-hidden prose-p:overflow-ellipsis	 mx-auto " :document="page" />
		</article>
		<Footer />
	</div>
</template>

<script>
export default {
async asyncData({ $content, params }) {
		// console.log('got here')
		const pages = await $content('articles')
			.where({ slug: params.slug })
			.fetch()
		console.log(pages[0])
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
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
					content: 'https://www.henryikoh.com/blog/' + this.page.slug,
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
		}
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
	},
}
</script>

<style>

</style>