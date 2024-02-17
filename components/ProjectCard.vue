/* eslint-disable vue/valid-v-for */
<template>
    <div>
      
        <div class=" relative grid md:grid-cols-2 items-center">
    
    <div>
      
		<nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
		<img :src="article.cover" class=" object-center h-96 object-contain rounded-xl w-full" alt="" />
		<!-- <div class=" flex py-1">
			<p class="date dark:text-slate-300">{{ formatDate(article.createdAt) }}</p>
			<p class=" text-gray-600 ml-2">{{ article.readingTime }}</p>
		</div> -->
    </nuxt-link>
    </div>
    <div class=" px-10">
        <p class=" text-white text-lg">{{ article.project }}</p>
        <h1 class="text-4xl font-bold dark:text-white">{{ article.title }}</h1>
		
        <div class="  flex top-3 left-3 gap-3">
			<p v-for="tag in article.tag" :key="tag" class="  text-white   text-sm " >
			{{tag}}
		</p>

        
		</div>
        <a class="bg-black dark:bg-gray-600 inline-block mt-4  px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-white" href="#">coming soon...</a>
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