<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<!-- {#if animate} -->
<div class="bg-slate-800">
	<div class="pt-16 triangle h-[100vh] w-full" transition:fly={{ x: -500 }}>
		<div class="xl:ml-[5%] xl:mt-[8%] sm:p-2 w-fit max-w-7xl grid lg:grid-cols-2 gap-4 ">
			<div class="flex flex-col gap-4 items-center">
				<img
					src="https://seancollings.dev/static/media/small3.5783a9a0.png"
					alt="It me!"
					class="rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px] border-8 border-white"
				/>
				<h1 class="text-white font-mont font-bold text-8xl text-center">
					Hello! <span>👋</span>
				</h1>
			</div>
			<div class="text-white text-lg px-4 sm:px-0">
				<p class="mb-4 leading-7">
					Cillum ut ullamco eiusmod eu elit consequat quis culpa in reprehenderit velit veniam nisi
					officia. Dolor voluptate nulla ipsum nisi elit deserunt excepteur amet consectetur
					cupidatat ad commodo. Nostrud ex in minim Lorem adipisicing ut ea.
				</p>
				<p class="mb-4 leading-7">
					Duis sint aute ad nulla laboris minim esse anim eiusmod elit ex. Sit quis enim fugiat
					deserunt fugiat consectetur aliquip. Ea cillum irure id cillum enim reprehenderit nisi
					cupidatat. Enim excepteur labore duis officia.
				</p>
				<p class="mb-4 leading-7">
					Labore ut fugiat nulla Lorem sint non ut Lorem sint esse incididunt. Duis aliqua qui id
					sint ea officia proident. In exercitation proident anim anim do. Eiusmod ut est laboris ex
					eu sint esse reprehenderit ex occaecat velit ea id sit.
				</p>
				<p class="mb-4 leading-7">
					Duis sint aute ad nulla laboris minim esse anim eiusmod elit ex. Sit quis enim fugiat
					deserunt fugiat consectetur aliquip. Ea cillum irure id cillum enim reprehenderit nisi
					cupidatat. Enim excepteur labore duis officia.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- {/if} -->
<style lang="postcss">
	.triangle {
		background: linear-gradient(135deg, theme(colors.indigo.500) 60%, transparent 40%);
		filter: drop-shadow(0.6rem 0.6rem 1rem rgba(0, 0, 0, 0.4));
	}
</style>
