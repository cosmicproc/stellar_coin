<script lang="ts">
	import type { SelectedField } from '$lib/calcUtils';
	import { updateValue } from '$lib/stores';

	export let index: number;
	export let parameter: SelectedField;

	let selected: number;

	function handleField(i: number) {
		return () => {
			selected = i;
			updateValue(index, parameter.options[selected].value);
		};
	}
</script>

{#each parameter.options as option, i}
	<button
		class="py-2 px-4 rounded-3xl m-1 cursor-pointer transition-all shadow select-none border-transparent border-2 {selected ===
		i
			? 'bg-green-400 dark:bg-green-700 border-green-600 dark:border-green-400'
			: 'bg-orange-300 dark:bg-orange-700 hover:bg-blue-300 dark:hover:bg-blue-600'}"
		on:click={handleField(i)}
	>
		{option.name}
	</button>
{/each}
