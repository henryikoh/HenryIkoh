<template>
  <div class="dark:bg-dark">
    <Navbar :show-profile="true" />
    <div class="wrapper hero w-11/12 md:w-4/5 mx-auto pt-8 md:pt-32">
		<img class=" h-28 w-28 visible md:hidden md:h-36 md:w-36 object-cover rounded-lg mb-3" src="/profile.jpeg" alt="henry ikoh">
			<div class="copy">
				<h2 class="mb-1 md:mb-5 md:text-4xl text-xl text-gray-500">
					<span class="font-bold md:text-8xl text-5xl text-gray-900 dark:text-white md:whitespace-nowrap">Building Better <span class="gradient-text">Systems.</span></span>
					<br />
					<span class="block mt-3 md:mt-4">People. Systems. Futures.</span>
				</h2>
				<p class="dark:text-white font-light md:leading-snug md:text-4xl text-gray-900 leading-relaxed tracking-wider text-xl">
					I help founders, leaders, and organizations diagnose broken systems and engineer the infrastructure their next stage actually requires, using <nuxt-link to="/system" class="underline underline-offset-4 hover:opacity-70 transition-opacity">The <span style="color: #00ff9f;">Zero</span> Point System</nuxt-link>.
				</p>
				<p class="font-light text-lg mt-3 md:mt-5 md:text-2xl text-gray-600">
					The people who change the world aren't smarter than anyone else. They just learned to see broken systems — and had the courage to build new ones.
				</p>

				<div class="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7">
					<nuxt-link to="/contact" class="bg-black dark:bg-gray-600 text-center px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors">Diagnose Your System →</nuxt-link>
					<nuxt-link to="/system" class="text-center px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 transition-colors">See the Method →</nuxt-link>
				</div>

			</div>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">

		<ProjectsTab/>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">

		<ServicesTab/>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">

			<component :is="tab"></component>
		</div>
		<div class="mx-auto w-11/12 md:w-4/5 wrapper pt-12">
			<CommunitySignup />
		</div>
		<Footer/>
  </div>
</template>

<script>
import ProjectsTab from '~/components/ProjectsTab.vue';

export default {
    name: 'IndexPage',
    async asyncData() {
    },
    data() {
        return {
            tab: "Article-tab"
        };
    },
	mounted(){
		
		const convertKit = document.createElement('script')
      convertKit.setAttribute('src', 'https://f.convertkit.com/ckjs/ck.5.js')
      document.head.appendChild(convertKit)

	},
    methods: {},
    components: { ProjectsTab }
}
</script>
<style>
.copy h2 .gradient-text {
		background: #000000;
		background-image: linear-gradient(
			110deg,
			rgba(242, 112, 156, 1) 0%,
			rgba(255, 148, 114, 1) 44%
		);
		background-size: 400% 400%;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-animation: AnimationName 5s ease infinite;
		-moz-animation: AnimationName 5s ease infinite;
		animation: AnimationName 5s ease infinite;
	}
	@-webkit-keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
