<template>
  <div>
    <div v-if="showBanner && $route.path !== '/founders'" class="relative" style="background-color: #00ff9f;">
      <nuxt-link
        to="/founders"
        class="group block text-center text-black text-sm md:text-base py-2 pl-4 pr-12 hover:opacity-90 transition-opacity"
      >
        Building something and deep down it feels off? <span class="font-semibold">You're not crazy <span class="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span></span>
      </nuxt-link>
      <button
        aria-label="Dismiss banner"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-black text-2xl leading-none px-2 hover:opacity-60 transition-opacity"
        @click="dismissBanner"
      >
        &times;
      </button>
    </div>
  <div class="bg-center bg-cover flex h-16 md:h-28 items-center md:relative navback object-cover sticky top-0 z-10">
    <div class="w-11/12 md:w-4/5 mx-auto flex justify-between items-center">

    <nuxt-link to="/">
			<div class="logo">
				<h1 class="font-bold text-3xl md:text-5xl text-white md:pb-2">
					Henry Ikoh
				</h1>
			</div>
		</nuxt-link>
    <div class="flex gap-4 md:gap-6">
      <nuxt-link to="/ideas" class="text-white text-sm md:text-lg font-bold hover:opacity-80 transition-opacity">Ideas</nuxt-link>
      <nuxt-link to="/system" class="hidden md:block text-white text-sm md:text-lg font-bold hover:opacity-80 transition-opacity">The System</nuxt-link>
      <a href="https://henryikoh.substack.com/" target="_blank" rel="noopener" class="hidden md:block text-white text-sm md:text-lg font-bold hover:opacity-80 transition-opacity">Newsletter</a>
      <nuxt-link to="/contact" class="text-white text-sm md:text-lg font-bold hover:opacity-80 transition-opacity">Contact</nuxt-link>
    </div>
    <img v-if="showProfile" class="absolute invisible md:visible h-20 w-20 md:h-36 md:w-36 object-cover rounded-full left-0 right-0 mr-auto ml-auto top-10 border-4 border-white" src="/profile.jpeg" alt="henry ikoh">

    </div>
	</div>
  </div>
</template>

<script>
export default {
	props: {
		showProfile: Boolean
	},
	data() {
		return {
			// Rendered in the static HTML by default; hidden on mount if dismissed
			showBanner: true
		}
	},
	mounted() {
		if (localStorage.getItem('foundersBannerDismissed') === '1') {
			this.showBanner = false
		}
	},
	methods: {
		dismissBanner() {
			this.showBanner = false
			localStorage.setItem('foundersBannerDismissed', '1')
		}
	}
}
</script>

<style>
.navback {
  background-image: url(/navback.png);
}
</style>