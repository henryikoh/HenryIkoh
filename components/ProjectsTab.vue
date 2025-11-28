<template>
    <div>
        <h2 class="text-4xl font-bold dark:text-white pb-9">Projects</h2>
      <div v-if="page && page.length > 0" class="relative" style="min-height: 600px;">
                    <transition name="fade" mode="out-in">
                        <div :key="currentIndex">
                            <ProjectCard :article="page[currentIndex]" />
                        </div>
                    </transition>

                    <!-- Navigation Controls -->
                    <div class="flex items-center justify-center gap-4 mt-8">
                        <button
                            @click="prevProject"
                            :disabled="currentIndex === 0"
                            class="px-6 py-3 bg-black dark:bg-gray-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ← Previous
                        </button>

                        <div class="flex gap-2">
                            <button
                                v-for="(project, index) in page"
                                :key="project.slug"
                                @click="goToProject(index)"
                                class="w-3 h-3 rounded-full transition-all"
                                :class="index === currentIndex ? 'bg-gray-900 dark:bg-gray-300 w-8' : 'bg-gray-400 dark:bg-gray-600'"
                            ></button>
                        </div>

                        <button
                            @click="nextProject"
                            :disabled="currentIndex === page.length - 1"
                            class="px-6 py-3 bg-black dark:bg-gray-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next →
                        </button>
                    </div>

                    <!-- Project Counter -->
                    <p class="text-center mt-4 text-gray-600 dark:text-gray-400">
                        {{ currentIndex + 1 }} / {{ page.length }}
                    </p>
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
          this.page = await this.$content('projects')
                .without(['body'])
                .sortBy('createdAt', 'desc')
                .limit(this.count)

          // .where({tag: { $contains: ['']}}) // can be used for searching a tag
                .fetch()

        },
        mounted() {
          // Start auto-scroll after component is mounted
          this.startAutoScroll()
        },
        beforeDestroy() {
          // Clean up interval when component is destroyed
          this.stopAutoScroll()
        },
        methods: {
          nextProject() {
            if (this.currentIndex < this.page.length - 1) {
              this.currentIndex++
            } else {
              // Loop back to first project
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
            this.resetAutoScroll()
          },
          startAutoScroll() {
            // Auto-scroll every 5 seconds
            this.autoScrollInterval = setInterval(() => {
              this.nextProject()
            }, 5000)
          },
          stopAutoScroll() {
            if (this.autoScrollInterval) {
              clearInterval(this.autoScrollInterval)
            }
          },
          resetAutoScroll() {
            // Reset the timer when user manually navigates
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
    
    <style>
    
    </style>