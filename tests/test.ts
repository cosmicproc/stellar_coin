import { expect, test } from '@playwright/test';

test('example test', async ({ page }) => {
	await page.goto('/');
	expect(2 + 2).toBe(4);
});
