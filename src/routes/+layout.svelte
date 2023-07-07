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
<main>
	<slot />
</main>

<svelte:window bind:scrollY={y} />

<style lang="postcss">
	nav {
		@apply text-gray-50 flex items-center justify-center fixed gap-4 top-0 w-full transition-colors h-16 z-40;
	}

	a {
		@apply font-light text-xl hover:text-blue-300 transition-colors;
	}

	main {
		@apply overflow-y-auto h-full;
	}

	.scolled {
		@apply bg-slate-700 drop-shadow-md;
	}
</style>
