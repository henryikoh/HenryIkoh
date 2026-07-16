/* eslint-disable vue/valid-v-for */
<template>
  <div class=" relative">
		<div class="absolute flex flex-wrap top-3 left-3 right-3 gap-2 z-10">
			<nuxt-link v-for="tag in article.tag" :key="tag" :to="{ path: '/thoughts', query: { tag: tag.trim().toLowerCase() } }" class=" myblur text-white px-2 py-2 rounded-lg text-sm bg-slate-400 backdrop-blur bg-opacity-30 hover:bg-opacity-60 transition-colors" >
			{{tag}}
		</nuxt-link>
		</div>
		<nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="group block">
		<div class="overflow-hidden rounded-xl">
			<img :src="article.cover" class="h-60 object-center object-cover rounded-xl w-full transition-transform duration-500 ease-out group-hover:scale-105" alt="" />
		</div>
		<div class=" flex py-1">
			<p class="date dark:text-slate-300">{{ formatDate(article.createdAt) }}</p>
			<p class=" text-gray-600 ml-2">{{ article.readingTime }}</p>
		</div>
		
			<h3 class="text-2xl font-bold dark:text-white group-hover:underline underline-offset-4">{{ article.title }}</h3>
		
		<p class=" text-gray-700 pt-1 dark:text-slate-400">{{ article.description }}</p>
		</nuxt-link>
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