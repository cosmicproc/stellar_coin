<script lang="ts">
	import { updateValue } from '$lib/stores';

	export let index: number;

	let isOn = false;

	function handleField() {
		isOn = !isOn;
		updateValue(index, isOn ? 1 : 0);
	}
</script>

<button
	class="border-2 rounded-full shadow w-16 h-8 flex items-center px-1 transition-colors {isOn
		? 'bg-green-400 border-green-600 dark:bg-green-700 dark:border-green-500'
		: 'border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800'}"
	on:click={handleField}
>
	<div
		class="w-5 h-5 rounded-full bg-neutral-500 dark:bg-neutral-300 transition-transform{isOn
			? ' translate-x-[160%]'
			: ''}"
	></div>
</button>
