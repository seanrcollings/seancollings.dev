<script lang="ts">
	import '../app.css';

	let y: number;
</script>

<svelte:head>
	<title>Sean Collings</title>
</svelte:head>

<nav class:scolled={y > 32}>
	<a href="/">Home</a>
	<a href="/projects">Projects</a>
	<a href="/skills">Skills</a>
	<a href="/assets/resume.pdf">Resume</a>
</nav>
<main class="z-20">
	<slot />
</main>

<div class="iframe-container">
	<iframe
		src="https://procedural-ships.vercel.app/?fighterCount=10&scoutCount=15&transportCount=5&starCount=200"
		height="100%"
		width="100%"
	/>
</div>
<svelte:window bind:scrollY={y} />

<style lang="postcss">
	.iframe-container {
		/* display: none; */
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	nav {
		@apply text-gray-50 flex items-center justify-center fixed gap-4 top-0 w-full transition-colors h-16 z-40;
	}

	a {
		@apply font-light text-xl hover:text-blue-300 transition-colors;
	}

	main {
		@apply h-full  min-h-screen;
	}

	.scolled {
		@apply bg-slate-700 opacity-90 drop-shadow-md;
	}

	:global(body) {
		@apply bg-slate-800;
	}
</style>
