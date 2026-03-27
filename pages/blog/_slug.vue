<template>
  <div class="dark:bg-dark">
		<!-- Reading Progress Bar -->
		<div class="fixed top-0 left-0 w-full z-50 h-1 bg-gray-200 dark:bg-gray-700">
			<div class="h-full bg-gray-900 dark:bg-white transition-none" :style="{ width: scrollProgress + '%' }"></div>
		</div>

		    <Navbar />

		<article class=" w-11/12 md:w-4/5 mx-auto">
			<h1 class="font-bold pt-5 md:pt-10 text-4xl md:text-7xl wrapa dark:text-white">{{ page.title }}</h1>
			<div class="info wrapa">
				<div class="flex flex-col md:flex-row md:items-baseline pb-8 pt-2 gap-1 md:gap-0">
					<p class="text-base md:text-2xl text-gray-800 dark:text-white">{{ formatDate(page.createdAt) }}</p>
					<p class="md:pl-6 text-sm md:text-2xl text-gray-500">{{ page.readingTime }}</p>
				</div>
			</div>
			<img class=" z-0 mb-10 object-center object-cover h-60 w-full md:h-[600px]" :src="page.cover" alt="" />
			<nuxt-content class=" prose prose-gray dark:prose-p:text-white dark:prose-invert prose-base lg:prose-lg xl:prose-xl prose-li:marker:text-gray-900  dark:prose-li:marker:text-gray-200 prose-ul:list-outside   prose-p:overflow-hidden prose-p:overflow-ellipsis 	 mx-auto  " :document="page" />

			<!-- Community CTA Section -->
			<div class="border-t border-gray-200 dark:border-gray-700 mt-16 pt-12 mb-8">
				<CommunitySignup />
			</div>

			<!-- Contact CTA Section -->
			<div class="mb-12">
				<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12 text-center">
					<h3 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Ready to Redesign Your System?
					</h3>
					<p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
						If you've identified a broken system and want help fixing it properly, let's talk.
					</p>
					<nuxt-link
						to="/contact"
						class="bg-black dark:bg-gray-600 inline-block px-8 py-4 text-lg md:text-xl rounded-md text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
					>
						Start a Conversation
					</nuxt-link>
				</div>
			</div>

			<!-- Next/Previous Navigation -->
			<div class="border-t border-gray-200 dark:border-gray-700 pt-8 pb-16">
				<div class="flex flex-col md:flex-row justify-between items-stretch gap-6">
					<!-- Previous Article -->
					<nuxt-link
						v-if="prev"
						:to="{ name: 'blog-slug', params: { slug: prev.slug } }"
						class="flex-1 group"
					>
						<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-full hover:border-gray-900 dark:hover:border-gray-300 transition-colors">
							<p class="text-sm text-gray-500 dark:text-gray-400 mb-2">← Previous Article</p>
							<h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
								{{ prev.title }}
							</h4>
						</div>
					</nuxt-link>
					<div v-else class="flex-1"></div>

					<!-- Next Article -->
					<nuxt-link
						v-if="next"
						:to="{ name: 'blog-slug', params: { slug: next.slug } }"
						class="flex-1 group"
					>
						<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-full hover:border-gray-900 dark:hover:border-gray-300 transition-colors text-right">
							<p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Article →</p>
							<h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
								{{ next.title }}
							</h4>
						</div>
					</nuxt-link>
					<div v-else class="flex-1"></div>
				</div>
			</div>
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
		// console.log(pages[0])
		const page = pages[0]

		// Fetch all articles sorted by date to get prev/next
		const allArticles = await $content('articles')
			.only(['title', 'slug', 'createdAt'])
			.sortBy('createdAt', 'desc')
			.fetch()

		// Find current article index
		const currentIndex = allArticles.findIndex(article => article.slug === params.slug)

		// Get previous and next articles
		const prev = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null
		const next = currentIndex > 0 ? allArticles[currentIndex - 1] : null

		return {
			page,
			prev,
			next
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
			link: [{
      rel: 'canonical',

      href: 'https://www.henryikoh.com/blog/' + this.page.slug,
    },],
		}
	},
	data() {
		return {
			scrollProgress: 0
		}
	},
	mounted() {
		window.addEventListener('scroll', this.updateProgress)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.updateProgress)
	},
	created(){
		this.$gtag.pageview({ page_path: this.page.slug, page_title:this.page.title, page_location:this.$route })
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		},
		updateProgress() {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
		}
	},
}
</script>

<style scoped>
/* ul.li::marker {
	color: red;
} */
</style>
