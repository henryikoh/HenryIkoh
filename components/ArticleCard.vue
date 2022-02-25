/* eslint-disable vue/valid-v-for */
<template>
  <div class=" relative">
		<div class=" absolute flex top-3 left-3 gap-3">
			<p v-for="tag in article.tag" :key="tag" class=" blur text-white px-2 py-2 rounded-lg text-sm bg-slate-400 backdrop-blur bg-opacity-30" >
			{{tag}}
		</p>
		</div>
		<nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
		<img :src="article.cover" class="h-60 object-center object-cover rounded-xl w-full" alt="" />
		<div class=" flex py-1">
			<p class="date dark:text-slate-300">{{ formatDate(article.createdAt) }}</p>
			<p class=" text-gray-600 ml-2">{{ article.readingTime }}</p>
		</div>
		
			<h1 class="text-2xl font-bold dark:text-white">{{ article.title }}</h1>
		
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
.blur{
	backdrop-filter: blur(4px);
}
</style>