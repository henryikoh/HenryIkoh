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
					<div class="flex flex-wrap gap-2 md:pl-6">
						<span v-for="tag in page.tag" :key="tag" class="text-sm md:text-xl text-gray-500">{{ tag }}</span>
					</div>
				</div>
			</div>
			<img class=" z-0 mb-10 object-center object-cover h-60 w-full md:h-[600px]" :src="page.cover" alt="" />
			<nuxt-content class=" prose prose-gray dark:prose-p:text-white dark:prose-invert prose-base lg:prose-lg xl:prose-xl prose-li:marker:text-gray-900  dark:prose-li:marker:text-gray-200 prose-ul:list-outside   prose-p:overflow-hidden prose-p:overflow-ellipsis 	 mx-auto  " :document="page" />

			<!-- Zero Point System Bridge -->
			<div class="border-t border-gray-200 dark:border-gray-700 mt-16 pt-12 mb-8 max-w-3xl mx-auto">
				<p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">The Process Behind the Work</p>
				<h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
					Every project runs through the same system.
				</h3>
				<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
					Discovery → Architecture → Solution Design → Pilot. Each phase delivers a standalone result. You always know what's broken, why, and what to do next — before committing to a full build.
				</p>
				<nuxt-link to="/system" class="text-gray-900 dark:text-white font-medium hover:underline underline-offset-4 text-lg">
					See exactly how I work →
				</nuxt-link>
			</div>

			<!-- Contact CTA -->
			<div class="mb-16">
				<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12">
					<div class="max-w-3xl mx-auto">
						<h3 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Have a system that needs fixing?
						</h3>
						<p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
							Whether you're a founder building from scratch, an organization with broken operations, or a social enterprise ready to scale — let's figure out what's actually wrong before we talk about solutions.
						</p>
						<div class="flex flex-col sm:flex-row gap-4">
							<nuxt-link
								to="/contact"
								class="bg-black dark:bg-gray-600 text-center inline-block px-8 py-4 text-lg rounded-md text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
							>
								Start a Conversation
							</nuxt-link>
							<nuxt-link
								to="/"
								class="text-center px-8 py-4 text-lg rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
							>
								See more work
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>

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
		updateProgress() {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
		}
	},
}
</script>

<style scoped>
</style>
