import { writable } from 'svelte/store';
import { calcParameters } from './calc';

const initialList = [];

for (let i = 0; i < calcParameters.length; i++) {
	initialList[i] = 0;
}

export const valuesList = writable(initialList);

export function updateValue(index: number, value: number) {
	valuesList.update((o) => {
		o[index] = value;
		return o;
	});
}
