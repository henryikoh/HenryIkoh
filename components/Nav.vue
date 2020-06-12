<template>
	<div class="head">
		<nuxt-link to="/">
			<div class="logo">
				<h1>
					Henry Ikoh<span>.</span>
				</h1>
			</div>
		</nuxt-link>
		<ul class="menu">
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
	color: inherit;
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}

@media screen and (max-width: 767px) {
	.head {
		/* width: 90%; */
		margin: auto;
		padding: 17px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
		background-color: white;
		padding: 15px 5%;
		z-index: 2;
	}
	.logo {
	}
	.logo h1 {
		color: var(--secondary-color);
		font-family: Rubik;
		font-style: normal;
		font-weight: bold;
		font-size: 35px;
		line-height: 53px;
	}
	.logo h1 span {
		color: var(--primary-color);
	}
	.menu {
		display: none;
	}
}
@media screen and (min-width: 768px) {
	.head {
		width: 80%;
		margin: auto;
		padding: 20px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
	}
	.logo h1 {
		color: var(--secondary-color);
		font-family: Rubik;
		font-style: normal;
		font-weight: bold;
		font-size: 45px;
		line-height: 53px;
	}
	.logo h1 span {
		color: var(--primary-color);
	}
	.menu {
		list-style-type: none;
	}
	.menu li {
		display: inline-block;
		margin-left: 15px;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;
		color: #525252;
		padding: 16px 50px;
		background: rgba(196, 196, 196, 0.38);
		border-radius: 5px;
	}
}
</style>
