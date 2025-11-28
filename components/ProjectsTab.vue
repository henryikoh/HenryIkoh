<template>
    <div>
        <h2 class="text-4xl font-bold dark:text-white pb-9">Projects</h2>
      <div v-if="page" class="space-y-12">
                    <div v-for="page in page" :key="page.slug">
                        <ProjectCard :article="page" />
                    </div>

                </div>

          </div>
    </template>
    
    <script>
    export default {
       data() {
          return {
            page: [],
            count: 20
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
        methods: {
          async loadmore(){
            const articles = await this.$content('articles').without(['body']).sortBy('createdAt', 'desc').skip(this.count).limit(6).fetch()
            console.log(articles)
            this.page.push(...articles)
            this.count = this.count + 6
          }
        }
    }
    </script>
    
    <style>
    
    </style>