import { test as baseTest } from '@playwright/test';
import { HomePage } from './pageObjects/homePage';
import { FormsPage } from './pageObjects/FormsPage';
import { PracticeFormPage } from './pageObjects/PracticeFormPage';

type StepFixtures = {
  homePage: HomePage;
  formsPage: FormsPage;
  practiceFormPage: PracticeFormPage;
};

export const test = baseTest.extend<StepFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  formsPage: async ({ page }, use) => {
    const formsPage = new FormsPage(page);
    await use(formsPage);
  },

  practiceFormPage: async ({ page }, use) => {
    const practiceFormPage = new PracticeFormPage(page);
    await use(practiceFormPage);
  },
});

export { expect } from '@playwright/test';
