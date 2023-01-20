<svelte:head>
	<title>Thank You</title>
</svelte:head>
<div class="flex h-full w-full flex-row justify-center text-center">
	<div class="space-y-12 xl:space-y-16">
		<h1 class="text-8xl font-extrabold">Thanks for Listening.</h1>
		<h2 class="text-6xl font-extrabold">Questions or Suggestions?</h2>
		<hr class="border-2 border-black" />
		<h2 class="text-6xl font-extrabold">SvelteKit+Tailwind Examples</h2>
		<ul class="space-y-5 text-2xl lg:text-3xl xl:text-4xl">
			<li>
				My Own Website: <a
					target="_blank"
					href="https://driedsponge.net">https://driedsponge.net</a
				>
			</li>
			<li>
				This Presentation: <a href="https://sveltekit-demo-3gi.pages.dev/"
					>https://sveltekit-demo-3gi.pages.dev/</a
				>
			</li>
		</ul>
		<h2 class="text-4xl font-bold">
			Links to source code are on each site respectively. (I will show some code if there's time) .
		</h2>
	</div>
</div>

<style lang="postcss">
	a {
		@apply text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-500;
	}
</style>
