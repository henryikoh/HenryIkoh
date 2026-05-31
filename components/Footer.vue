<template>
<div>
	 <div class="border-b border-gray-700 border-t dark:border-white w-11/12 dark:text-slate-300 mt-16 mx-auto pb-6 pt-6 signature text-center md:w-4/5 wrapper">
		<p class="text-sm md:text-base text-gray-600 dark:text-gray-400 italic mb-4">Stop working harder. Start designing better.</p>
		<div class="flex flex-wrap justify-center gap-6 mb-4 text-xs uppercase tracking-widest">
			<nuxt-link to="/" class="hover:text-gray-900 dark:hover:text-white transition-colors">Home</nuxt-link>
			<nuxt-link to="/system" class="hover:text-gray-900 dark:hover:text-white transition-colors">The System</nuxt-link>
			<a href="https://henryikoh.substack.com/" target="_blank" rel="noopener" class="hover:text-gray-900 dark:hover:text-white transition-colors">Newsletter</a>
			<nuxt-link to="/contact" class="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</nuxt-link>
		</div>
		<div class="uppercase text-xs tracking-widest">
			<h2>
				Designed and built by
				<a target="_blank" class="underline" href="https://twitter.com/henryikoh_">Henry Ikoh</a>
			</h2>
			<p>Copyright © 2026</p>
		</div>
	</div>

	<!-- IKOH ceremonial card — Sovereign house (navy + gold) -->
	<div class="w-11/12 md:w-4/5 mx-auto mt-8">
		<section class="ikoh-card" aria-label="House of Ikoh">
			<img
				src="/ikoh/ikoh-mark-circle-cream.png"
				alt=""
				class="ikoh-mark"
				width="56"
				height="56"
			/>
			<img
				src="/ikoh/ikoh-wordmark-cream.png"
				alt="IKOH"
				class="ikoh-wordmark-img"
			/>
			<div class="ikoh-divider" aria-hidden="true">
				<span class="ikoh-rule"></span>
				<span class="ikoh-diamond">◇</span>
				<span class="ikoh-rule"></span>
			</div>
			<p class="ikoh-tagline">Rooted in balance &nbsp;·&nbsp; Built to endure</p>
			<p class="ikoh-fine">© MMXXVI · The House of Ikoh — One crest, many legacies.</p>
		</section>
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

.ikoh-card {
	background: #16202B;
	border: 1px solid #8E7230;
	padding: 48px 24px 36px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 18px;
	border-radius: 2px;
}

.ikoh-mark {
	width: 56px;
	height: 56px;
	object-fit: contain;
}

.ikoh-wordmark-img {
	height: 22px;
	width: auto;
	object-fit: contain;
}

.ikoh-divider {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
	width: 180px;
	margin-top: 4px;
}

.ikoh-rule {
	flex: 1;
	height: 1px;
	background: #BE9A45;
	opacity: 0.7;
}

.ikoh-diamond {
	color: #BE9A45;
	font-size: 12px;
	line-height: 1;
}

.ikoh-tagline {
	font-family: 'EB Garamond', Georgia, serif;
	font-weight: 500;
	font-size: 12px;
	letter-spacing: 0.28em;
	text-transform: uppercase;
	color: #A6B6C6;
	margin: 0;
}

.ikoh-fine {
	font-family: 'EB Garamond', Georgia, serif;
	font-size: 12px;
	letter-spacing: 0.06em;
	color: #A6B6C6;
	opacity: 0.85;
	margin: 4px 0 0;
	padding-top: 16px;
	border-top: 1px solid rgba(246, 239, 226, 0.12);
	width: 100%;
	max-width: 520px;
}
</style>
