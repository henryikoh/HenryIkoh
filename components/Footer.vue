<template>
<div>
	<!-- Original footer — menu + website tagline -->
	<div class="border-b border-gray-700 border-t dark:border-white w-11/12 dark:text-slate-300 mt-16 mx-auto pb-6 pt-6 signature text-center md:w-4/5 wrapper">
		<p class="text-sm md:text-base text-gray-600 dark:text-gray-400 italic mb-4">Stop working harder. Start designing better.</p>
		<div class="flex flex-wrap justify-center gap-6 mb-4 text-xs uppercase tracking-widest">
			<nuxt-link to="/" class="hover:text-gray-900 dark:hover:text-white transition-colors">Home</nuxt-link>
			<nuxt-link to="/system" class="hover:text-gray-900 dark:hover:text-white transition-colors">The System</nuxt-link>
			<a href="https://henryikoh.substack.com/" target="_blank" rel="noopener" class="hover:text-gray-900 dark:hover:text-white transition-colors">Newsletter</a>
			<a href="https://lab.henryikoh.com" target="_blank" rel="noopener" class="hover:text-gray-900 dark:hover:text-white transition-colors">Lab ↗</a>
			<nuxt-link to="/contact" class="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</nuxt-link>
		</div>
	</div>

	<!-- IKOH family crest — self-contained, no menu -->
	<section class="ikoh-crest-section w-11/12 md:w-4/5 mx-auto mt-10 text-center" aria-label="House of Ikoh">
		<div class="ikoh-divider" aria-hidden="true">
			<span class="ikoh-rule"></span>
			<span class="ikoh-diamond">◇</span>
			<span class="ikoh-rule"></span>
		</div>

		<img
			src="/ikoh/ikoh-mark-circle-gold.png"
			alt=""
			class="ikoh-mark"
			width="56"
			height="56"
		/>

		<h2 class="ikoh-name">Henry Ikoh</h2>

		<p class="ikoh-tagline">Home to the builders of nations.</p>

		<p class="ikoh-house">◇ The House of Ikoh — One crest, many legacies.</p>

		<div class="ikoh-divider" aria-hidden="true">
			<span class="ikoh-rule"></span>
			<span class="ikoh-diamond">◇</span>
			<span class="ikoh-rule"></span>
		</div>
	</section>

	<!-- Final line — designed & built credit, last thing on the page -->
	<div class="w-11/12 md:w-4/5 mx-auto mt-6 text-center uppercase text-xs tracking-widest text-gray-600 dark:text-gray-400">
		<h2>
			Designed and built by
			<a target="_blank" class="underline" href="https://twitter.com/henryikoh_">Henry Ikoh</a>
		</h2>
		<p>Copyright © 2026</p>
	</div>

	<div class="pb-12"></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=EB+Garamond:wght@400;500;600&display=swap');

.ikoh-crest-section {
	color: #4b5563;
}

.ikoh-divider {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 14px;
	max-width: 520px;
	margin: 0 auto;
}

.ikoh-rule {
	flex: 1;
	height: 1px;
	background: #B98C34;
	opacity: 0.55;
}

.ikoh-diamond {
	color: #B98C34;
	font-size: 12px;
	line-height: 1;
	opacity: 0.85;
}

.ikoh-mark {
	width: 56px;
	height: 56px;
	object-fit: contain;
	margin: 28px auto 18px;
	display: block;
}

.ikoh-name {
	font-family: 'Cormorant Garamond', Georgia, serif;
	font-weight: 500;
	font-size: 22px;
	letter-spacing: 0.32em;
	text-transform: uppercase;
	text-indent: 0.32em;
	margin: 0 0 14px;
	color: inherit;
}

.ikoh-tagline {
	font-family: 'Cormorant Garamond', Georgia, serif;
	font-weight: 500;
	font-style: italic;
	font-size: 18px;
	line-height: 1.5;
	margin: 0 0 14px;
	color: inherit;
	opacity: 0.9;
}

.ikoh-house {
	font-family: 'EB Garamond', Georgia, serif;
	font-style: italic;
	font-size: 11px;
	letter-spacing: 0.08em;
	opacity: 0.7;
	margin: 0 0 28px;
	color: inherit;
}

@media (prefers-color-scheme: dark) {
	.ikoh-crest-section { color: #ffffff; }
	.ikoh-rule { opacity: 0.7; }
}
</style>
