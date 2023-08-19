<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<div class="flex pt-24 bg-slate-800 h-full text-gray-50">
	<div class="lg:w-1/2 lg:mx-auto m-5" in:fade={{ duration: 800 }}>
		<p class="pb-12 text-lg">
			Here's a list of some of the projects I've worked on. I've worked on a lot more, but these are
			the ones I'm most proud of. The links below will take you to the deployed version of the
			project or the GitHub repository. Each of the projects below are open source, so feel free to
			check them out!
		</p>
		<div class="flex gap-4 flex-wrap justify-center">
			{#each data.projects as project}
				<a
					class="bg-slate-700 w-56 h-28 rounded-md border-blue-400 border text-gray-50 p-4 flex flex-col gap-1 hover:border-blue-300 hover:bg-slate-800 transition-colors overflow-hidden"
					href={project.link}
					target="_blank"
				>
					<div class="flex items-center gap-2">
						<span class="w-[32px] h-[32px]">
							<i class="material-symbols-outlined">{project.icon}</i>
						</span>
						<h2 class="font-bold text-lg h-8 leading-8">{project.name}</h2>
					</div>
					<p>{project.description}</p>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	:global(.material-symbols-outlined) {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}

	i {
		font-size: 32px !important;
	}
</style>
