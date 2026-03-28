<template>
	<div class="dark:bg-dark min-h-screen">
		<Navbar />
		<div class="w-11/12 md:w-4/5 mx-auto pt-10 md:pt-16 pb-24">

			<div class="max-w-3xl mb-12">
				<p class="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Ideas Library</p>
				<h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5">Open Problems</h1>
				<p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
					Thought experiments, system designs, and problem breakdowns. These are ideas I find worth thinking through — problems that have a real solution if approached the right way. This is how I think.
				</p>
			</div>

			<div v-if="ideas && ideas.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<nuxt-link
					v-for="idea in ideas"
					:key="idea.slug"
					:to="{ name: 'ideas-slug', params: { slug: idea.slug } }"
					class="group block hover:no-underline"
				>
					<div class="border border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full flex flex-col hover:border-gray-900 dark:hover:border-gray-300 transition-colors">

						<div v-if="idea.tag && idea.tag.length" class="flex flex-wrap gap-2 mb-4">
							<span
								v-for="tag in idea.tag"
								:key="tag"
								class="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
							>{{ tag }}</span>
						</div>

						<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-snug">
							{{ idea.title }}
						</h2>

						<div class="space-y-3 flex-1">
							<div v-if="idea.problem">
								<p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Problem</p>
								<p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ idea.problem }}</p>
							</div>
							<div v-if="idea.idea">
								<p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Idea</p>
								<p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ idea.idea }}</p>
							</div>
							<div class="grid grid-cols-2 gap-3 pt-1">
								<div v-if="idea.market" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
									<p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Market</p>
									<p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ idea.market }}</p>
								</div>
								<div v-if="idea.gain" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
									<p class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Opportunity</p>
									<p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ idea.gain }}</p>
								</div>
							</div>
						</div>

						<div class="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
							<span class="text-sm text-gray-400 dark:text-gray-500">{{ formatDate(idea.createdAt) }}</span>
							<span class="text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read →</span>
						</div>
					</div>
				</nuxt-link>
			</div>

			<div v-else class="text-gray-400 dark:text-gray-500 py-16 text-center">
				More ideas coming soon.
			</div>

		</div>
		<Footer />
	</div>
</template>

<script>
export default {
	async asyncData({ $content }) {
		const ideas = await $content('ideas')
			.without(['body'])
			.sortBy('createdAt', 'desc')
			.fetch()
		return { ideas }
	},
	head() {
		return {
			title: 'Open Problems — Henry Ikoh',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Thought experiments, system designs, and problem breakdowns. Problems that have a real solution if approached the right way.',
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: 'Open Problems — Henry Ikoh',
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: 'Thought experiments, system designs, and problem breakdowns. Problems that have a real solution if approached the right way.',
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
