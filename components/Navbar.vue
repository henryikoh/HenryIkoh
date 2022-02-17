<template>
  <div class="bg-center bg-cover flex h-16 md:h-28 items-center md:relative navback object-cover sticky top-0 z-10">
    <div class=" w-11/12 md:w-4/5 mx-auto ">

    
    <nuxt-link to="/">
			<div class="logo">
				<h1 class="font-bold text-3xl md:text-5xl text-white md:pb-2">
					Henry Ikoh
				</h1>
			</div>
		</nuxt-link>
    <img v-if="showProfile" class="absolute invisible md:visible h-20 w-20 md:h-36 md:w-36 object-cover rounded-full left-0 right-0 mr-auto ml-auto top-10 border-4 border-white" src="/profile.jpeg" alt="henry ikoh">
		
    </div>
	</div>
</template>

<script>
export default {
	props: {
		showProfile: Boolean
	}
}
</script>

<style>
.navback {
  background-image: url(/navback.png);
}
</style>