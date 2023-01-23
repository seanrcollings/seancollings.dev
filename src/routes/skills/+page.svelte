<script lang="ts">
	import type { PageData } from './$types';
	import type { Skill, SkillTag } from './+page';
	import svelte from '$lib/assets/skills/svelte.png';
	import { fly, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let filter: SkillTag | 'any' = 'any';

	export let data: PageData;

	let filteredSkills: Skill[];
	$: filteredSkills = data.skills.filter((skill) => {
		if (filter === 'any') return true;

		return skill.tags.includes(filter);
	});
</script>

<div class="flex pt-16 bg-slate-800 h-full">
	<div class="flex-[50%]">
		<button class="bg-blue-500" on:click={() => (filter = 'any')}>All</button>
		<button class="bg-blue-500" on:click={() => (filter = 'love')}>Love</button>
		<button class="bg-blue-500" on:click={() => (filter = 'knowledgeable')}>Know</button>
	</div>
	<div class="flex-[50%]">
		{#each filteredSkills as skill (skill.name)}
			<div
				in:scale|local={{ duration: 2000 }}
				out:scale|local={{ duration: 500 }}
				animate:flip={{ duration: 2000 }}
				class="bg-slate-600 text-white m-1 p-2 rounded-md inline-flex items-center"
			>
				<img src={svelte} alt="" class="w-5 h-5 inline-block mr-2 object-fill" />
				<span>
					{skill.name}
				</span>
			</div>
		{/each}
	</div>
</div>
