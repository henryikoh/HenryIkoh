<template>
  <div class="community-section relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 24px 24px;"></div>

    <div class="relative px-8 py-16 md:px-16 md:py-20">
      <!-- Eyebrow -->
      <p class="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">For systems builders</p>

      <!-- Main heading with gradient -->
      <h3 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 max-w-2xl">
        Do you see broken systems<br>
        <span class="community-gradient">and feel the pull to fix them?</span>
      </h3>

      <!-- Body -->
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-xl leading-relaxed">
        I write about systems thinking, building things that balance people and profit, and the courage it takes to create something new. If that's you — join the list.
      </p>

      <!-- Social proof hint -->
      <p class="text-sm text-gray-500 dark:text-gray-500 mb-8">
        Founders, engineers, and leaders who are building better systems.
      </p>

      <!-- CTA -->
      <a
        href="https://substack.com"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 text-lg rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors font-medium"
      >
        Subscribe
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunitySignup'
}
</script>

<style scoped>
.community-gradient {
  background-image: linear-gradient(110deg, rgba(242, 112, 156, 1) 0%, rgba(255, 148, 114, 1) 44%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
