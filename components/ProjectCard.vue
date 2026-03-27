/* eslint-disable vue/valid-v-for */
<template>
    <div>
        <nuxt-link :to="{ name: 'projects-slug', params: { slug: article.slug } }" class="block group">
            <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-500 transition-all">

                <!-- Top: Cover + Header side by side on desktop -->
                <div class="grid md:grid-cols-5">
                    <!-- Cover -->
                    <div class="md:col-span-2">
                        <img :src="article.cover" class="w-full h-48 md:h-full object-cover object-center group-hover:opacity-95 transition-opacity" :alt="article.alt || article.project" />
                    </div>

                    <!-- Header + Meta -->
                    <div class="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
                        <div class="flex items-center gap-2 mb-3">
                            <StatusBadge v-if="article.status" :status="article.status" />
                            <span v-if="article.timeline" class="text-xs text-gray-500 dark:text-gray-400">{{ article.timeline }}</span>
                            <span v-if="article.createdAt" class="text-xs text-gray-400 dark:text-gray-500">· {{ formatDate(article.createdAt) }}</span>
                        </div>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">{{ article.project }}</p>
                        <h2 class="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{{ article.title }}</h2>
                        <p v-if="article.role" class="text-gray-500 dark:text-gray-400 text-sm mb-4">{{ article.role }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in article.tag" :key="tag" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Problem / Solution / Impact -->
                <div class="grid md:grid-cols-3 border-t border-gray-200 dark:border-gray-700">
                    <div v-if="article.problem" class="p-5 md:p-6 md:border-r border-b md:border-b-0 border-gray-200 dark:border-gray-700">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                            </div>
                            <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Problem</p>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ article.problem }}</p>
                    </div>
                    <div v-if="article.solution" class="p-5 md:p-6 md:border-r border-b md:border-b-0 border-gray-200 dark:border-gray-700">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                            </div>
                            <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Solution</p>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ article.solution }}</p>
                    </div>
                    <div v-if="article.impact" class="p-5 md:p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                                <svg class="w-4 h-4 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                            </div>
                            <p class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Impact</p>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ article.impact }}</p>
                    </div>
                </div>

                <!-- CTA Footer -->
                <div class="border-t border-gray-200 dark:border-gray-700 px-5 md:px-8 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
                    <span class="text-gray-500 dark:text-gray-400 text-sm">{{ article.type }}</span>
                    <span class="text-gray-900 dark:text-white font-medium text-sm group-hover:underline underline-offset-4">
                        Read Case Study &rarr;
                    </span>
                </div>

            </div>
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
