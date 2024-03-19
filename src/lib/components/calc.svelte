<script lang="ts">
	import Field from '$lib/components/field.svelte';
	import config from '$lib/config.json';
	import { calcParameters, calcResult, calcDetail } from '$lib/calc';
	import { valuesList } from '$lib/stores';

	let result: number;
	$: result = Math.floor(calcResult(...$valuesList) * 10000) / 10000 || 0;
</script>

<div class="m-auto my-10 lg:flex relative overflow-auto lg:overflow-visible max-w-[90%]">
	<div
		class="border-4 border-neutral-400 dark:border-neutral-600 rounded-3xl shadow-lg px-2 py-10 lg:px-10"
	>
		<div class="flex justify-center">
			<div class="text-center mb-4 w-3/4">
				<h1 class="font-bold text-4xl mb-4">{config.appName}</h1>
				<p class="text-lg">{config.appDescription}</p>
			</div>
		</div>
		<div class="flex flex-col items-center">
			{#each calcParameters as parameter, index}
				<Field {parameter} {index} />
			{/each}
		</div>
	</div>
	<div class="lg:absolute lg:right-0 lg:translate-x-full h-full">
		<div
			class="m-auto mt-8 lg:mt-32 sticky top-10 bg-neutral-100 dark:bg-neutral-900 border-2 lg:border-l-0 border-neutral-200 dark:border-neutral-700 shadow p-6 rounded-3xl lg:rounded-l-none"
		>
			<div class="font-mono text-lg">
				{#each calcDetail(...$valuesList) as detail}
					{#if detail}
						<div>{detail}</div>
					{/if}
				{/each}
				<div
					class="text-center{calcDetail(...$valuesList).filter((o) => o).length
						? ' border-t-2 border-neutral-400 dark:border-neutral-500 pt-3 mt-3'
						: ''}"
				>
					<strong class="text-2xl">{result}{config.postValue}</strong>
					<br />
					({config.valueName})
				</div>
			</div>
		</div>
	</div>
</div>
