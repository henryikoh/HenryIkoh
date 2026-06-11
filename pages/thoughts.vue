<template>
  <div class="dark:bg-dark min-h-screen">
    <Navbar :show-profile="false" />
    <div class="wrapper w-11/12 md:w-4/5 mx-auto pt-10 md:pt-20 pb-24">
      <!-- Masthead -->
      <header class="border-b-2 border-gray-900 dark:border-white pb-8">
        <p class="uppercase tracking-[0.3em] text-xs text-gray-500 dark:text-gray-400 mb-3">
          The Journal of Henry Ikoh
        </p>
        <h1 class="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white leading-none">
          Thoughts
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light">
          Essays on systems, product, and whatever else has my attention —
          {{ articles.length }} pieces and counting.
        </p>
      </header>

      <!-- Controls: search + topics -->
      <div class="border-b border-gray-200 dark:border-gray-700 py-5">
        <div class="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search every essay…"
            aria-label="Search all essays, including their full text"
            class="w-full md:w-72 bg-transparent border-0 border-b border-gray-400 dark:border-gray-500 px-0 py-2 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
          />
          <div class="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm">
            <span class="uppercase tracking-widest text-xs text-gray-400 dark:text-gray-500">Topics</span>
            <button
              class="uppercase tracking-wide transition-colors"
              :class="selectedTag === null
                ? 'text-gray-900 dark:text-white font-bold underline underline-offset-4'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
              @click="selectTag(null)"
            >
              All
            </button>
            <button
              v-for="tag in visibleTags"
              :key="tag.key"
              class="uppercase tracking-wide transition-colors"
              :class="selectedTag === tag.key
                ? 'text-gray-900 dark:text-white font-bold underline underline-offset-4'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'"
              @click="selectTag(tag.key)"
            >
              {{ tag.label }}
            </button>
            <button
              v-if="tags.length > topicLimit"
              class="text-gray-400 dark:text-gray-500 italic hover:text-gray-900 dark:hover:text-white transition-colors"
              @click="showAllTopics = !showAllTopics"
            >
              {{ showAllTopics ? 'fewer topics' : `+ ${tags.length - topicLimit} more` }}
            </button>
          </div>
        </div>
        <p v-if="isSearching" class="mt-3 text-sm text-gray-400 dark:text-gray-500 italic">
          Searching…
        </p>
        <p v-else-if="searchQuery.trim()" class="mt-3 text-sm text-gray-400 dark:text-gray-500 italic">
          {{ filteredArticles.length }} result{{ filteredArticles.length === 1 ? '' : 's' }} across titles and full essay text
        </p>
      </div>

      <!-- Featured (latest) -->
      <article v-if="featured" class="group border-b border-gray-200 dark:border-gray-700 py-10">
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: featured.slug } }"
          class="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
        >
          <img
            :src="featured.cover"
            :alt="featured.alt || featured.title"
            class="w-full aspect-[4/3] object-cover object-center rounded-sm"
          />
          <div>
            <p class="uppercase tracking-[0.3em] text-xs text-gray-500 dark:text-gray-400 mb-4">
              Latest — {{ formatDate(featured.createdAt) }} · {{ featured.readingTime }}
            </p>
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight group-hover:underline underline-offset-4">
              {{ featured.title }}
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {{ featured.description }}
            </p>
          </div>
        </nuxt-link>
        <div class="flex flex-wrap gap-2 mt-4 md:w-1/2 md:ml-auto md:pl-12">
          <button
            v-for="tag in featured.tag"
            :key="tag"
            class="px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-gray-900 dark:hover:border-gray-300 transition-colors"
            @click="selectTag(tag.trim().toLowerCase())"
          >
            {{ tag }}
          </button>
        </div>
      </article>

      <!-- Card grid -->
      <ul v-if="rest.length" class="gap-8 md:gap-6 grid md:grid-cols-3 pt-10">
        <li v-for="article in rest" :key="article.slug">
          <ArticleCard :article="article" />
        </li>
      </ul>

      <!-- Empty state -->
      <div v-if="!featured && !rest.length && !isSearching" class="text-center py-24">
        <p class="text-2xl font-light text-gray-600 dark:text-gray-400 italic">
          Nothing here{{ searchQuery.trim() ? ` for “${searchQuery.trim()}”` : '' }}.
        </p>
        <button
          class="mt-4 uppercase tracking-widest text-sm text-gray-900 dark:text-white underline underline-offset-4"
          @click="clearFilters"
        >
          Clear filters
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ThoughtsPage',
  async asyncData({ $content, query }) {
    const articles = await $content('articles')
      .without(['body', 'text'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
      selectedTag: query.tag ? String(query.tag).toLowerCase() : null,
    }
  },
  data() {
    return {
      articles: [],
      searchQuery: '',
      searchResults: null,
      isSearching: false,
      searchTimer: null,
      selectedTag: null,
      showAllTopics: false,
      topicLimit: 8,
    }
  },
  head() {
    return {
      title: 'Thoughts - Henry Ikoh',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'All essays and thoughts by Henry Ikoh on systems thinking, product building, and designing better futures.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Thoughts - Henry Ikoh',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'All essays and thoughts by Henry Ikoh on systems thinking, product building, and designing better futures.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.henryikoh.com/thoughts',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Thoughts - Henry Ikoh',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'All essays and thoughts by Henry Ikoh on systems thinking and product building.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://www.henryikoh.com/thoughts' }],
    }
  },
  computed: {
    // Tags vary in casing across articles ('self' vs 'Systems'), so dedupe
    // on a lowercase key, keep the first spelling as label, sort by frequency
    tags() {
      const seen = new Map()
      for (const article of this.articles) {
        for (const raw of article.tag || []) {
          const key = raw.trim().toLowerCase()
          if (!key) continue
          if (!seen.has(key)) {
            seen.set(key, { key, label: raw.trim(), count: 0 })
          }
          seen.get(key).count++
        }
      }
      return [...seen.values()].sort(
        (a, b) => b.count - a.count || a.key.localeCompare(b.key)
      )
    },
    visibleTags() {
      return this.showAllTopics ? this.tags : this.tags.slice(0, this.topicLimit)
    },
    filteredArticles() {
      const base = this.searchResults !== null ? this.searchResults : this.articles
      if (!this.selectedTag) return base
      return base.filter((article) =>
        (article.tag || [])
          .map((t) => t.trim().toLowerCase())
          .includes(this.selectedTag)
      )
    },
    // Big featured slot only for the untouched index; search/tag views go straight to rows
    featured() {
      if (this.searchQuery.trim() || this.selectedTag) return null
      return this.filteredArticles[0] || null
    },
    rest() {
      return this.featured ? this.filteredArticles.slice(1) : this.filteredArticles
    },
  },
  watch: {
    searchQuery() {
      clearTimeout(this.searchTimer)
      this.searchTimer = setTimeout(this.runSearch, 250)
    },
    '$route.query.tag'(tag) {
      this.selectedTag = tag ? String(tag).toLowerCase() : null
    },
  },
  beforeDestroy() {
    clearTimeout(this.searchTimer)
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    // Full-text search: nuxt/content indexes title, description, slug and the
    // raw markdown text, so this matches inside article bodies too
    async runSearch() {
      const q = this.searchQuery.trim()
      if (!q) {
        this.searchResults = null
        this.isSearching = false
        return
      }
      this.isSearching = true
      try {
        this.searchResults = await this.$content('articles')
          .search(q)
          .without(['body', 'text'])
          .fetch()
      } catch (e) {
        // Fall back to a title/description match if the search index is unavailable
        const needle = q.toLowerCase()
        this.searchResults = this.articles.filter((a) =>
          `${a.title} ${a.description}`.toLowerCase().includes(needle)
        )
      } finally {
        this.isSearching = false
      }
    },
    selectTag(key) {
      this.selectedTag = this.selectedTag === key ? null : key
      const query = this.selectedTag ? { tag: this.selectedTag } : {}
      this.$router.replace({ query }).catch(() => {})
    },
    clearFilters() {
      this.searchQuery = ''
      this.searchResults = null
      this.selectTag(null)
    },
  },
}
</script>
