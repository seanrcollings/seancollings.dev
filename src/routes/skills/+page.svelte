<script lang="ts">
	import type { PageData } from './$types';
	import type { Skill, ProfiencyLevel } from './+page';
	import { fade, fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let data: PageData;

	let enabled = true;
	let profiencyFilter: ProfiencyLevel | 'any' = 'any';

	let filteredSkills: Skill[];
	$: filteredSkills = data.skills.filter((skill) => {
		if (profiencyFilter === 'any') return true;

		return skill.profiecencyLevels.includes(profiencyFilter);
	});

	// Disabling fancy animations for now
	/*
	in:fly|local={{ y: Math.random() * 300 + 100, x: Math.random() * 200, duration: 1000 }}
	out:fly|local={{ y: Math.random() * 300 + 100, x: Math.random() * 200, duration: 1000 }}
	*/
</script>

<div class="flex pt-16 min-h-screen flex-col gap-1 p-2 lg:p-0 lg:gap-10 lg:px-36 lg:flex-row">
	<div
		class="flex-[50%] flex justify-center items-center lg:items-end flex-col gap-1"
		in:fade={{ duration: 800 }}
	>
		<div class="flex flex-col w-96">
			<h1 class="text-purple-100 text-xl">Filter by things that I am:</h1>
			{#each data.profiencyFilters as filter (filter.profiency)}
				<button
					class="text-purple-100 text-left pl-4 hover:text-blue-300"
					class:selected={profiencyFilter === filter.profiency}
					on:click={() => {
						if (!enabled) return;
						if (profiencyFilter === filter.profiency) {
							profiencyFilter = 'any';
						} else {
							profiencyFilter = filter.profiency;
						}
						enabled = false;
						setTimeout(() => (enabled = true), 1100);
					}}
				>
					<h2 class="lg:text-4xl text-2xl">
						{filter.title}
					</h2>
					{#if profiencyFilter === filter.profiency}
						<p transition:slide|local>{filter.description}</p>
					{/if}
				</button>
			{/each}
		</div>
	</div>
	<div
		class="flex-[50%] flex flex-wrap items-center lg:items-start content-baseline my-auto"
		in:fade={{ duration: 800 }}
	>
		<div class="max-w-2xl mx-auto">
			{#each filteredSkills as skill (skill.name)}
				<div
					animate:flip={{ duration: 1000 }}
					class="bg-slate-600 text-white m-1 p-2 rounded-md inline-flex items-center flex-none"
				>
					<img src={skill.imageUrl} alt="" class="h-5 inline-block mr-2 object-fill" />
					<span>
						{skill.name}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.selected {
		box-shadow: -1px 0 0 theme(colors.purple.100);
	}
</style>
