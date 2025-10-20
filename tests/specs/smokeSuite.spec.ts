import { test, expect } from '@playwright/test';

test.describe('группировка тестов 1', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.onliner.by/');
  });

  test.skip('has title', async ({ page }) => {
    // await page.goto('https://www.onliner.by/');
    await expect(page.getByText('Вход')).toBeVisible();
    await expect(page.getByTitle('Facebook')).toBeVisible();
    await expect(page.getByTitle('ВКонтакте')).toBeVisible();
    await expect(page.getByTitle('Google')).toBeVisible();

    // Expect Logo is visible
    await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  });

  test.fixme('has title 2', async ({ page }) => {
    await expect(page.getByText('Вход')).toBeVisible();
    await expect(page.getByTitle('Facebook')).toBeVisible();
    await expect(page.getByTitle('ВКонтакте')).toBeVisible();
    await expect(page.getByTitle('Google')).toBeVisible();

    // Expect Logo is visible
    await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  });

  test.fail('has title 3', async ({ page }) => {
    await expect(page.getByText('Вход')).toBeVisible();
    await expect(page.getByTitle('Facebook')).toBeVisible();
    await expect(page.getByTitle('ВКонтакте')).toBeVisible();
    await expect(page.getByTitle('Google')).toBeVisible();

    // Expect Logo is visible
    await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  });

  test.only('has title 4', async ({ page }) => {
    test.step('проверка отображения лого', async () => {
      // Expect Logo is visible
      await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
    });
    await expect(page.getByText('Вход')).toBeVisible();
    await expect(page.getByTitle('Facebook')).toBeVisible();
    await expect(page.getByTitle('ВКонтакте')).toBeVisible();
    await expect(page.getByTitle('Google')).toBeVisible();
  });

  test('has title 5', async ({ page }) => {
    await expect(page.getByText('Вход')).toBeVisible();
    await expect(page.getByTitle('Facebook')).toBeVisible();
    await expect(page.getByTitle('ВКонтакте')).toBeVisible();
    await expect(page.getByTitle('Google')).toBeVisible();

    // Expect Logo is visible
    await expect(page.getByRole('link', { name: 'Onlíner', exact: true })).toBeVisible();
  });
});
