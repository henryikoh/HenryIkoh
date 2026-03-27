<template>
    <div>
        <h2 class="text-4xl font-bold dark:text-white mb-3">Work</h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-3xl">
            Real projects where I diagnosed problems, designed systems, and measured what happened. Each one shaped how I think about building things that work.
        </p>

        <div v-if="page && page.length > 0">
            <!-- Minimal carousel nav -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex gap-2">
                    <button
                        v-for="(project, index) in page"
                        :key="project.slug"
                        @click="goToProject(index)"
                        class="px-3 py-1.5 text-sm rounded-full transition-all"
                        :class="index === currentIndex
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'"
                    >
                        {{ project.project }}
                    </button>
                </div>
                <div class="flex gap-2">
                    <button
                        @click="prevProject"
                        class="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        :class="{ 'opacity-30 pointer-events-none': currentIndex === 0 }"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <button
                        @click="nextProject"
                        class="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        :class="{ 'opacity-30 pointer-events-none': currentIndex === page.length - 1 }"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </button>
                </div>
            </div>

            <!-- Project card -->
            <transition name="fade" mode="out-in">
                <div :key="currentIndex">
                    <ProjectCard :article="page[currentIndex]" />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: [],
            count: 20,
            currentIndex: 0,
            autoScrollInterval: null
        }
    },
    async fetch() {
        const projects = await this.$content('projects')
            .without(['body'])
            .sortBy('createdAt', 'desc')
            .limit(this.count)
            .fetch()

        const desiredOrder = [
            'relationship-management-system-for-executives', // Kindred
            'creating-the-future---ai-powered-learning-community', // SENPAI
            'tradr-bringing-local-markets-online' // Tradr
        ]
        this.page = projects.sort((a, b) => {
            const indexA = desiredOrder.indexOf(a.slug)
            const indexB = desiredOrder.indexOf(b.slug)
            if (indexA === -1) return 1
            if (indexB === -1) return -1
            return indexA - indexB
        })
    },
    mounted() {
        this.startAutoScroll()
    },
    beforeDestroy() {
        this.stopAutoScroll()
    },
    methods: {
        nextProject() {
            if (this.currentIndex < this.page.length - 1) {
                this.currentIndex++
            } else {
                this.currentIndex = 0
            }
            this.resetAutoScroll()
        },
        prevProject() {
            if (this.currentIndex > 0) {
                this.currentIndex--
            }
            this.resetAutoScroll()
        },
        goToProject(index) {
            this.currentIndex = index
            this.stopAutoScroll()
        },
        startAutoScroll() {
            this.autoScrollInterval = setInterval(() => {
                this.nextProject()
            }, 13000)
        },
        stopAutoScroll() {
            if (this.autoScrollInterval) {
                clearInterval(this.autoScrollInterval)
            }
        },
        resetAutoScroll() {
            this.stopAutoScroll()
            this.startAutoScroll()
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
