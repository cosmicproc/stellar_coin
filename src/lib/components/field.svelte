<script lang="ts">
	import Enter from '$lib/components/enter.svelte';
	import Select from '$lib/components/select.svelte';
	import Toggle from '$lib/components/toggle.svelte';
	import { type AnyField, EnteredField, SelectedField, BooleanField } from '$lib/calcUtils';

	export let parameter: AnyField;
	export let index: number;

	let error = false;
</script>

<div class="mx-4">
	<div
		class="border-2 border-neutral-300 dark:border-neutral-700 rounded-3xl my-4 w-80 lg:w-[34em] p-4"
	>
		<div class="flex items-center">
			<span class="font-medium text-lg ml-2 whitespace-nowrap cursor-default">
				{parameter.name}
			</span>
			{#if parameter.description}
				<span class="tooltip ml-2">
					<div
						class="tooltip-content pointer-events-none transition-opacity duration-500 opacity-0 absolute -translate-x-[47%] -translate-y-[110%] flex flex-col items-center"
					>
						<div
							class="bg-neutral-200 dark:bg-neutral-800 p-4 rounded-2xl border-2 border-neutral-400 dark:border-neutral-600"
						>
							{parameter.description}
						</div>
						<div
							class="triangle -mt-px border-t-[0.6em] border-x-[0.7em] border-transparent border-t-neutral-400 dark:border-t-neutral-600"
						></div>
					</div>
					<i class="fa-solid fa-circle-info"></i>
				</span>
			{/if}

			<div class="flex flex-wrap items-center justify-end w-full ml-4">
				{#if error}
					<i class="fa-solid fa-circle-xmark fa-lg mr-3 text-red-500"></i>
				{/if}
				{#if parameter instanceof EnteredField}
					<Enter {index} {parameter} bind:error />
				{:else if parameter instanceof SelectedField}
					<Select {index} {parameter} />
				{:else if parameter instanceof BooleanField}
					<Toggle {index} />
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.tooltip:hover .tooltip-content {
		@apply opacity-100 pointer-events-auto;
	}
</style>
