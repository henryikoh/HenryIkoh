<template>
  <div class="dark:bg-dark">
    <Navbar :show-profile="true" />
    <div class="wrapper hero w-11/12 md:w-4/5 mx-auto pt-8 md:pt-14">
		<img class=" h-28 w-28 visible md:hidden md:h-36 md:w-36 object-cover rounded-lg mb-3" src="/profile.jpeg" alt="henry ikoh">
			<div class="copy">
				<h1 class=" mb-3 md:mb-5 md:text-4xl text-xl text-gray-500">
					<span class=" font-bold md:text-8xl text-5xl">
						Unicorn
					</span>
					<br />
					/Product Architect/ 
				</h1>
				<p class="dark:text-white font-light md:leading-snug md:text-4xl text-gray-900 leading-relaxed tracking-wider text-xl">
					Hi, I'm Henry Ikoh, a Fullstack Product Engineer⚡️I help Ambitious Entrepreneurs and Founders make sense of the chaos of building Product Ideas helping them go from 0 - 1.
				</p>
				<p class="font-light text-lg mt-3 md:mt-5 md:text-2xl text-gray-600">
					I have a goal to impact the lives of a billion users ❤️ 🦄
				</p>
				<a class="bg-black dark:bg-gray-600 inline-block mt-4  px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-white" href="#">what are you working on?</a>
			</div>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">
		
		<ProjectsTab/>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">
		
			<component :is="tab"></component>
		</div>
		<Footer/>
  </div>
</template>

<script>
import ProjectsTab from '~/components/ProjectsTab.vue';

export default {
    name: 'IndexPage',
    async asyncData({ $content }) {
    },
    data() {
        return {
            tab: "Article-tab"
        };
    },
    methods: {},
    components: { ProjectsTab }
}
</script>
<style>
.copy h1 span {
		background: #000000;
		background-image: linear-gradient(
			110deg,
			rgba(242, 112, 156, 1) 0%,
			rgba(255, 148, 114, 1) 44%
		);
		background-size: 400% 400%;
		-webkit-background-clip: text;
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
