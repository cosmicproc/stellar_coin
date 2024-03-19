<script lang="ts">
	import { EnteredField } from '$lib/calcUtils';
	import { updateValue } from '$lib/stores';

	export let index: number;
	export let parameter: EnteredField;
	export let error: boolean;

	let input: HTMLInputElement;
	let inputValue: string = '0';

	function handleField() {
		let inputValueInt = parseInt(inputValue);
		if (
			input.checkValidity() &&
			!Number.isNaN(inputValueInt) &&
			parameter.min <= inputValueInt &&
			inputValueInt <= parameter.max
		) {
			error = false;
			updateValue(index, inputValueInt);
		} else {
			if (inputValue !== '') {
				error = true;
			} else {
				error = false;
			}
			updateValue(index, 0);
		}
	}
</script>

<input
	bind:this={input}
	bind:value={inputValue}
	on:input={handleField}
	type="text"
	inputmode="numeric"
	pattern="[0-9]*"
	class="bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-600 rounded-full p-2 px-4 shadow w-20 lg:w-32"
/>
