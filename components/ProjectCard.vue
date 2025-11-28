/* eslint-disable vue/valid-v-for */
<template>
    <div>

        <div class=" relative grid md:grid-cols-2 items-center gap-8 mb-16">

    <div>

		<nuxt-link :to="{ name: 'projects-slug', params: { slug: article.slug } }">
		<img :src="article.cover" class=" object-center h-96 object-contain rounded-xl w-full hover:opacity-90 transition-opacity" alt="" />
    </nuxt-link>
    </div>
    <div class=" px-10">
		<div class="flex items-center gap-3 mb-3">
			<p class=" text-gray-500 dark:text-gray-400 text-lg">{{ article.project }}</p>
			<StatusBadge v-if="article.status" :status="article.status" />
		</div>
        <h1 class="text-4xl font-bold dark:text-white mb-2">{{ article.title }}</h1>

		<p v-if="article.role" class="text-gray-600 dark:text-gray-400 text-base mb-3">
			<span class="font-semibold">Role:</span> {{ article.role }}
		</p>

		<p v-if="article.description" class="text-gray-700 dark:text-gray-300 text-base mb-4">
			{{ article.description }}
		</p>

        <div class="  flex flex-wrap gap-2 mt-3">
			<span v-for="tag in article.tag" :key="tag" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full" >
			{{tag}}
		</span>


		</div>
        <nuxt-link :to="{ name: 'projects-slug', params: { slug: article.slug } }" class="bg-black dark:bg-gray-600 inline-block mt-6  px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors">View Case Study →</nuxt-link>
    </div>




	</div>
    </div>

</template>

<script>
export default {
props: {
		article: Object,
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
.myblur{
	backdrop-filter: blur(4px);
}
</style>