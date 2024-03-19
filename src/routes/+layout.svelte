<script>
	import '$lib/app.css';
	import config from '$lib/config.json';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<svelte:head>
	<title>{config.appName}</title>
</svelte:head>

<div class="dark:bg-black dark:[&>*]:text-white min-h-screen flex flex-col">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Source Sans';
		src: url('../fonts/SourceSans3VF-Upright.woff2');
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Source Sans';
		src: url('../fonts/SourceSans3VF-Italic.woff2');
		font-style: italic;
		font-display: swap;
	}
</style>
