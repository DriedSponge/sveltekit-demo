<div class="flex h-screen flex-col items-center justify-center px-3">
	<div class="container mx-auto max-w-4xl space-y-5">
		<h1 class="text-center text-4xl font-bold lg:text-5xl">Welcome to My SvelteKit Demo!</h1>
		<p class="text-center text-xl lg:text-2xl">
			The purpose of this website is to serve as a demonstration for the flexibility and versatility
			of SvelteKit and TailwindCSS. I'm too lazy to type out how SvelteKit and TailwindCSS work
			together, so you can visit their respective links at the bottom of this page.
		</p>
		<p class="text-center text-xl lg:text-2xl">
			You're probably wonder how this works? It's basically a fake slide show. Click <a
				href="/slides"
				target="_blank">here</a
			> to go to the slides, then use your arrow keys to navigate between slides. At the end of my presentation
			I'm supposed to reveal the whole thing is a SvelteKit app and it is supposed to be a "big surprise".
		</p>
		<p class="text-center text-xl font-extrabold tracking-wide lg:text-2xl">
			<a
				href="/slides"
				target="_blank">Slides</a
			>
			&bull;
			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/DriedSponge/sveltekit-demo">Source Code</a
			>
			&bull;
			<a
				target="_blank"
				rel="noreferrer"
				href="https://kit.svelte.dev/">SvelteKit</a
			>
			&bull;
			<a
				target="_blank"
				rel="noreferrer"
				href="https://tailwindcss.com/">Tailwind</a
			>
		</p>
	</div>
</div>

<style lang="postcss">
	a {
		@apply text-blue-700 transition-colors duration-300 ease-in-out hover:text-blue-500;
	}
</style>
