import { Page } from '@playwright/test';

export class BaseTest {
  page: Page;
  constructor(page) {
    this.page = page;
  }
}
