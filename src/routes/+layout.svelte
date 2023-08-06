<script>
	import '../app.css';
	import CodeGeekLogo from '$lib/assets/codegeek-icon-alt.webp';
	import "@fontsource/silkscreen"
</script>

<meta name="author" content="Philaphonh Inthavongsa" />
<nav class="hidden md:flex flex-row justify-between items-center mx-16">
	<span class="inline-flex items-center">
		<a href="/" class="pr-12">
			<img src={CodeGeekLogo} alt="CodeGeek logo" class="w-20" />
		</a>
	</span>
	<a id="artyboy" href="https://artyboy.dev">artyboy.dev</a>
</nav>
<nav class="flex md:hidden flex-row justify-center items-center mx-4">
	<a href="/">
		<img src={CodeGeekLogo} alt="CodeGeek logo" class="w-20" />
	</a>
</nav>
<main class="mx-8 md:mx-16 my-4 md:my-8">
	<slot />
</main>

<style scoped>
	#artyboy {
		font-family: "Silkscreen", sans-serif;
	}
</style>