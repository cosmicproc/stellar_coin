export class GenericField {
	public name: string;
	public description: string;

	constructor(name: string, description: string = '') {
		this.name = name;
		this.description = description;
	}
}

export class EnteredField extends GenericField {
	public min: number;
	public max: number;

	constructor(name: string, description: string = '', min: number = 0, max: number = 100) {
		super(name, description);
		this.min = min;
		this.max = max;
	}
}

export class SelectedFieldOption {
	public name: string;
	public value: number;

	constructor(name: string, value: number = 0) {
		this.name = name;
		this.value = value;
	}
}

export class SelectedField extends GenericField {
	public options: SelectedFieldOption[];

	constructor(name: string, description: string = '', options: SelectedFieldOption[]) {
		super(name, description);
		this.options = options;
	}
}

export class BooleanField extends GenericField {}

export type AnyField = EnteredField | SelectedField | BooleanField;

// Aliases
export const enter = (...args: ConstructorParameters<typeof EnteredField>) =>
	new EnteredField(...args);
export const select = (...args: ConstructorParameters<typeof SelectedField>) =>
	new SelectedField(...args);
export const toggle = (...args: ConstructorParameters<typeof BooleanField>) =>
	new BooleanField(...args);

export const selectOption = (...args: ConstructorParameters<typeof SelectedFieldOption>) =>
	new SelectedFieldOption(...args);

export const cond = (a: unknown, b: unknown) => (a && b) || null;
export const mul = (a: unknown, b: unknown) => cond(a && b, `${a} × ${b}`);
export const info = (a: unknown, b: unknown) => cond(a && b, `${a} (${b})`);
