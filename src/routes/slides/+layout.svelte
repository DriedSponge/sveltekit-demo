<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	let min = 1;
	let max = 9;
	function handleSlide(e) {
		if (!e.key) return;
		let pg = $page.route.id;
		let currPage = Number(pg.charAt(pg.length - 1));

		if (e.key === "ArrowRight") {
			let next = currPage + 1;
			if (next <= max) {
				goto(`/slides/${next}`);
			} else {
				alert("You are at the end of the presentation!");
			}
		} else if (e.key === "ArrowLeft") {
			let next = currPage - 1;
			if (next >= min) {
				goto(`/slides/${next}`);
			} else {
				alert("You are at the first slide!");
			}
		}
	}
</script>

<svelte:window on:keydown={handleSlide} />
<div class="hidden h-screen p-5 lg:block">
	<slot />
</div>
<div class="lg:hidden">
	<h1 class="text-center text-3xl font-extrabold">
		Sorry, this part of the website is not ready for mobile use.
	</h1>
</div>
