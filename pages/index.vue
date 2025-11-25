<template>
  <div class="dark:bg-dark">
    <Navbar :show-profile="true" />
    <div class="wrapper hero w-11/12 md:w-4/5 mx-auto pt-8 md:pt-14">
		<img class=" h-28 w-28 visible md:hidden md:h-36 md:w-36 object-cover rounded-lg mb-3" src="/profile.jpeg" alt="henry ikoh">
			<div class="copy">
				<h2 class="mb-1 md:mb-5 font-bold md:text-7xl text-4xl">
					<span class="text-gray-500">Building better </span><span class="gradient-text">futures.</span>
					<br />
					<span class="text-gray-500">People. Systems. Potential.</span>
				</h2>
				<p class="dark:text-white font-light md:leading-snug md:text-4xl text-gray-900 leading-relaxed tracking-wider text-xl">
					Human. Artist. Lover. Builder. Creator. Engineer. Renaissance polymath for the new age. I build systems, products, and experiences that unlock human potential and give people better futures.
				</p>
				<p class="font-light text-lg mt-3 md:mt-5 md:text-2xl text-gray-600">
					Building better futures through stronger relationships and powerful systems—with a goal to impact billions of people in the process.
				</p>

				<a class="bg-black dark:bg-gray-600 inline-block mt-4  px-7 md:py-4 py-3 text-lg rounded-md md:text-2xl text-white" href="https://calendly.com/henryikoh/product-chat" target="_blank">Ready for a better future?</a>
			
			
			</div>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">
		
		<ProjectsTab/>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">
		
			<component :is="tab"></component>
		</div>
		<div class="mx-auto thoughts w-11/12 md:w-4/5 wrapper pt-12">
		
		<ServicesTab/>
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
