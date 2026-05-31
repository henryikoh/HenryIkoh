<template>
<footer class="ikoh-footer w-11/12 md:w-4/5 mx-auto mt-16 pt-10 pb-6 text-center">
	<!-- Top gold divider replaces the old gray border -->
	<div class="ikoh-divider" aria-hidden="true">
		<span class="ikoh-rule"></span>
		<span class="ikoh-diamond">◇</span>
		<span class="ikoh-rule"></span>
	</div>

	<!-- Family crest -->
	<img
		src="/ikoh/ikoh-mark-circle-gold.png"
		alt=""
		class="ikoh-mark"
		width="56"
		height="56"
	/>

	<!-- Personal wordmark — this is a family crest, so the name carries the legacy -->
	<h2 class="ikoh-name">Henry Ikoh</h2>

	<p class="ikoh-tagline">Home to the builders of nations.</p>

	<!-- Menu, restyled in the IKOH language -->
	<nav class="ikoh-nav">
		<nuxt-link to="/" class="ikoh-link">Home</nuxt-link>
		<span class="ikoh-sep" aria-hidden="true">◇</span>
		<nuxt-link to="/system" class="ikoh-link">The System</nuxt-link>
		<span class="ikoh-sep" aria-hidden="true">◇</span>
		<a href="https://henryikoh.substack.com/" target="_blank" rel="noopener" class="ikoh-link">Newsletter</a>
		<span class="ikoh-sep" aria-hidden="true">◇</span>
		<nuxt-link to="/contact" class="ikoh-link">Contact</nuxt-link>
	</nav>

	<!-- Bottom gold divider -->
	<div class="ikoh-divider" aria-hidden="true">
		<span class="ikoh-rule"></span>
		<span class="ikoh-diamond">◇</span>
		<span class="ikoh-rule"></span>
	</div>

	<div class="ikoh-fine">
		<p>
			Designed and built by
			<a target="_blank" rel="noopener" href="https://twitter.com/henryikoh_" class="ikoh-credit-link">Henry Ikoh</a>
		</p>
		<p>Copyright © 2026</p>
		<p class="ikoh-house">◇ The House of Ikoh — One crest, many legacies.</p>
	</div>

	<div class="pb-12"></div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=EB+Garamond:wght@400;500;600&display=swap');

.ikoh-footer {
	color: #4b5563; /* gray-600, adapts via dark mode below */
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
	background: #B98C34; /* --gold */
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
	text-indent: 0.32em; /* optical: tracking adds trailing space */
	margin: 0 0 14px;
	color: inherit;
}

.ikoh-tagline {
	font-family: 'Cormorant Garamond', Georgia, serif;
	font-weight: 500;
	font-style: italic;
	font-size: 18px;
	line-height: 1.5;
	margin: 0 0 24px;
	color: inherit;
	opacity: 0.9;
}

.ikoh-nav {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px 16px;
	margin: 0 0 28px;
}

.ikoh-link {
	font-family: 'EB Garamond', Georgia, serif;
	font-weight: 600;
	font-size: 11px;
	letter-spacing: 0.22em;
	text-transform: uppercase;
	color: inherit;
	text-decoration: none;
	transition: color 0.25s ease;
	white-space: nowrap;
}

.ikoh-link:hover {
	color: #B98C34;
}

.ikoh-sep {
	color: #B98C34;
	font-size: 8px;
	opacity: 0.6;
	line-height: 1;
}

.ikoh-fine {
	font-family: 'EB Garamond', Georgia, serif;
	font-size: 12px;
	letter-spacing: 0.06em;
	margin-top: 22px;
	color: inherit;
	opacity: 0.8;
}

.ikoh-fine p { margin: 2px 0; }

.ikoh-house {
	font-style: italic;
	font-size: 11px;
	letter-spacing: 0.08em;
	opacity: 0.7;
	margin-top: 10px !important;
}

.ikoh-credit-link {
	color: inherit;
	border-bottom: 1px solid #B98C34;
	transition: color 0.25s ease;
}

.ikoh-credit-link:hover { color: #B98C34; }

/* Dark mode — adapt text but keep gold constant */
@media (prefers-color-scheme: dark) {
	.ikoh-footer { color: #cbd5e1; /* slate-300 */ }
	.ikoh-rule { opacity: 0.7; }
}
</style>
