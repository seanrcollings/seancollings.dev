<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div class="h-[100vh] flex">
	<div
		class="pt-16 triangle lg:min-h-[100vh] w-full bg-indigo-500 lg:bg-transparent h-full z-10"
		transition:fly={{ x: -500 }}
	>
		<div class="xl:ml-[5%] xl:mt-[8%] sm:p-2 w-fit max-w-7xl grid lg:grid-cols-2 gap-4">
			<div class="flex flex-col gap-4 items-center">
				<img
					src="/assets/me2.jpg"
					alt="Its me!"
					class="rounded-full h-[250px] w-[250px] md:h-[400px] md:w-[400px] border-8 border-white"
				/>
				<h1 class="text-white font-mont font-bold text-8xl text-center">
					Hello! <span>👋</span>
				</h1>
			</div>
			<div class="text-white text-lg px-4 md:px-20 sm:px-10">
				<p class="mb-4 leading-7">
					My name is Sean Collings, I'm a software developer from the US. I'm currently working at a
					small company called
					<a
						href="https://www.atomicjolt.com/"
						class="text-teal-400 hover:underline"
						target="_blank"
					>
						Atomic Jolt
					</a>

					as a full stack developer.
				</p>
				<p class="mb-4 leading-7">
					I grew up in town in northern Utah, and I've been programming since I was 12. I love to
					learn new things, and I'm always looking for new opportunities to grow and improve.
				</p>
				<p class="mb-4 leading-7">
					I earned a certification in Information Technology from Bridgerland Technical College in
					2019 and I graduated from Utah State University in 2023 with a degree in Computer Science.
				</p>
				<p class="mb-4 leading-7">Some of my passions are programming, books, and video games.</p>
			</div>
		</div>
	</div>
	<!-- <div class="iframe-container">
		<iframe
			src="https://procedural-ships.vercel.app/?fighterCount=10&scoutCount=15&transportCount=5&starCount=200"
			height="100%"
			width="100%"
		/>
	</div> -->
</div>

<style lang="postcss">
	.iframe-container {
		display: none;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 1024px) {
		.triangle {
			background: linear-gradient(135deg, theme(colors.indigo.500) 70%, transparent 40%);
			filter: drop-shadow(0.6rem 0.6rem 1rem rgba(0, 0, 0, 0.4));
		}
		.iframe-container {
			display: block;
		}
	}
</style>
