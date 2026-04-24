<template>
	<div class="dark:bg-dark">
		<!-- Reading Progress Bar -->
		<div class="fixed top-0 left-0 w-full z-50 h-1 bg-gray-200 dark:bg-gray-700">
			<div class="h-full bg-gray-900 dark:bg-white transition-none" :style="{ width: scrollProgress + '%' }"></div>
		</div>

		<!-- Zero Point System sticky banner -->
		<div class="fixed bottom-0 left-0 w-full z-40 flex justify-center pb-4 px-4 pointer-events-none">
			<nuxt-link
				to="/system"
				class="pointer-events-auto flex items-center justify-center gap-2 bg-gray-900/80 dark:bg-white/80 backdrop-blur-sm text-white dark:text-gray-900 text-xs md:text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg hover:bg-gray-900/90 dark:hover:bg-white/90 transition-colors text-center"
			>
				<span class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
				This problem is being analyzed through The <span style="color: #00ff9f;">Zero</span> Point System
			</nuxt-link>
		</div>

		<Navbar />

		<article class="w-11/12 md:w-4/5 mx-auto">
			<div class="max-w-3xl pt-8 md:pt-12 mb-6">
				<div class="flex items-center gap-3 mb-4">
					<nuxt-link to="/ideas" class="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">← Ideas</nuxt-link>
					<span class="text-gray-200 dark:text-gray-700">·</span>
					<span class="text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
						{{ page.status || 'Concept' }}
					</span>
				</div>
				<h1 class="font-bold text-4xl md:text-6xl text-gray-900 dark:text-white mb-4">{{ page.title }}</h1>
				<p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">{{ page.description }}</p>
				<div class="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
					<span>{{ formatDate(page.createdAt) }}</span>
					<span>{{ page.readingTime }}</span>
				</div>
			</div>

			<!-- Content + Sidebar layout -->
			<div :class="page.toc && page.toc.length >= 5 ? 'md:grid md:grid-cols-[1fr_200px] md:gap-12 md:items-start' : ''">

				<nuxt-content class="prose prose-gray dark:prose-p:text-white dark:prose-invert prose-base lg:prose-lg xl:prose-xl prose-li:marker:text-gray-900 dark:prose-li:marker:text-gray-200 prose-ul:list-outside prose-p:overflow-hidden prose-p:overflow-ellipsis mx-auto" :document="page" />

				<!-- Sticky TOC sidebar — desktop only, long articles only -->
				<aside v-if="page.toc && page.toc.length >= 5" class="hidden md:block sticky top-8 self-start">
					<div class="max-h-[calc(100vh-4rem)] overflow-y-auto">
						<p class="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Contents</p>
						<nav>
							<ul class="space-y-1">
								<li
									v-for="heading in page.toc"
									:key="heading.id"
									:class="{ 'pl-3': heading.depth === 3, 'pl-5': heading.depth === 4 }"
								>
									<a
										:href="'#' + heading.id"
										class="block text-sm py-0.5 transition-colors leading-snug"
										:class="activeHeading === heading.id
											? 'text-gray-900 dark:text-white font-medium'
											: 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'"
									>{{ heading.text }}</a>
								</li>
							</ul>
						</nav>
					</div>
				</aside>

			</div>

			<!-- CTA -->
			<div class="border-t border-gray-200 dark:border-gray-700 mt-16 pt-12 mb-16 max-w-3xl">
				<p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Want to build this?</p>
				<h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
					Steal it. Adapt it. Or let's build it together.
				</h3>
				<p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
					These ideas are free to take. If you're a founder or organization who wants to actually build something like this — and wants the system designed properly from the start — let's talk.
				</p>
				<div class="flex flex-col sm:flex-row gap-4">
					<nuxt-link
						to="/contact"
						class="bg-black dark:bg-gray-600 text-center inline-block px-8 py-4 text-lg rounded-md text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
					>
						Start a Conversation
					</nuxt-link>
					<nuxt-link
						to="/ideas"
						class="text-center px-8 py-4 text-lg rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
					>
						More Ideas →
					</nuxt-link>
				</div>
			</div>

		</article>
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const pages = await $content('ideas')
			.where({ slug: params.slug })
			.fetch()
		const page = pages[0]
		return { page }
	},
	head() {
		const url = 'https://www.henryikoh.com/ideas/' + this.page.slug
		const image = this.page.cover
			? (this.page.cover.startsWith('http') ? this.page.cover : 'https://www.henryikoh.com' + this.page.cover)
			: 'https://www.henryikoh.com/navback.png'
		return {
			title: this.page.title,
			titleTemplate: '%s - Henry Ikoh',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.page.description,
				},
				{ hid: 'og:type', property: 'og:type', content: 'article' },
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.page.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.page.description,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: image,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: url,
				},
				{
					hid: 'article:published_time',
					property: 'article:published_time',
					content: this.page.createdAt,
				},
				{
					hid: 'article:author',
					property: 'article:author',
					content: 'Henry Ikoh',
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
					hid: 'twitter:image',
					name: 'twitter:image',
					content: image,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.page.description,
				},
			],
			link: [
				{ rel: 'canonical', href: url },
			],
			script: [
				{
					hid: 'ldjson-article',
					type: 'application/ld+json',
					innerHTML: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Article',
						headline: this.page.title,
						description: this.page.description,
						image: image,
						author: {
							'@type': 'Person',
							name: 'Henry Ikoh',
							url: 'https://www.henryikoh.com/',
						},
						publisher: {
							'@type': 'Person',
							name: 'Henry Ikoh',
							url: 'https://www.henryikoh.com/',
						},
						datePublished: this.page.createdAt,
						dateModified: this.page.updatedAt || this.page.createdAt,
						mainEntityOfPage: {
							'@type': 'WebPage',
							'@id': url,
						},
					}),
				},
			],
			__dangerouslyDisableSanitizers: ['script'],
		}
	},
	data() {
		return {
			scrollProgress: 0,
			activeHeading: null,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.updateProgress)
		window.addEventListener('scroll', this.updateActiveHeading)
		this.updateActiveHeading()
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.updateProgress)
		window.removeEventListener('scroll', this.updateActiveHeading)
	},
	created() {
		this.$gtag.pageview({ page_path: this.page.slug, page_title: this.page.title, page_location: this.$route })
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
		},
		updateActiveHeading() {
			if (!this.page || !this.page.toc) return
			const headings = this.page.toc.map(h => document.getElementById(h.id)).filter(Boolean)
			const scrollY = window.scrollY + 100
			let current = null
			for (const el of headings) {
				if (el.offsetTop <= scrollY) current = el.id
			}
			this.activeHeading = current
		},
	},
}
</script>

<style scoped>
aside div::-webkit-scrollbar {
	display: none;
}
aside div {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
