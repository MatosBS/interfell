import { Locator, Page } from '@playwright/test';
import { BaseTest } from '../BaseTest';

export class HomePage extends BaseTest {
  btnForms: Locator;

  constructor(page) {
    super(page);
    this.btnForms = this.page.locator('div.top-card').getByText('Forms');
  }

  async goTo() {
    await this.page.goto('https://demoqa.com/');
  }
}
