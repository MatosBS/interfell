import { Locator, Page } from '@playwright/test';
import { BaseTest } from '../BaseTest';

export class FormsPage extends BaseTest {
  lnkPracticeForm: Locator;
  constructor(page) {
    super(page);
    this.lnkPracticeForm = this.page
      .locator('ul.menu-list>li')
      .getByText('Practice Form');
  }
}
