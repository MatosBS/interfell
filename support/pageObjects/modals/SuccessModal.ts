import { expect, Locator } from '@playwright/test';
import { BaseTest } from '../../BaseTest';

export class SuccessModal extends BaseTest {
  modal: Locator;
  lblTitle: Locator;
  lblStudentNameValue: Locator;
  lblStudentEmailValue: Locator;
  lblGenderValue: Locator;
  lblMobileValue: Locator;
  lblDateOfBirthValue: Locator;
  lblSubjectsValue: Locator;
  lblHobbiesValue: Locator;
  lblPictureValue: Locator;
  lblAddressValue: Locator;
  lblStateAndCityValue: Locator;
  btnClose: Locator;

  constructor(page) {
    super(page);
    this.lblTitle = this.page.locator('div.modal-title');
    this.modal = this.page.locator('div.modal-body');
    this.lblStudentNameValue = this.page.locator(
      'tbody tr:nth-of-type(1) td:last-of-type'
    );
    this.lblStudentEmailValue = this.page.locator(
      'tbody tr:nth-of-type(2) td:last-of-type'
    );

    this.lblGenderValue = this.page.locator(
      'tbody tr:nth-of-type(3) td:last-of-type'
    );
    this.lblMobileValue = this.page.locator(
      'tbody tr:nth-of-type(4) td:last-of-type'
    );
    this.lblDateOfBirthValue = this.page.locator(
      'tbody tr:nth-of-type(5) td:last-of-type'
    );
    this.lblSubjectsValue = this.page.locator(
      'tbody tr:nth-of-type(6) td:last-of-type'
    );
    this.lblHobbiesValue = this.page.locator(
      'tbody tr:nth-of-type(7) td:last-of-type'
    );
    this.lblPictureValue = this.page.locator(
      'tbody tr:nth-of-type(8) td:last-of-type'
    );
    this.lblAddressValue = this.page.locator(
      'tbody tr:nth-of-type(9) td:last-of-type'
    );
    this.lblStateAndCityValue = this.page.locator(
      'tbody tr:nth-of-type(10) td:last-of-type'
    );
    this.btnClose = this.page.locator('button#closeLargeModal');
  }

  async rbtGender(value: string) {
    return await this.page.locator(`input[value = '${value}']`);
  }

  async chbHobbies(value: string) {
    return await this.page.locator('div.custom-checkbox').getByText(value);
  }

  async validateForm({
    firstName,
    lastName,
    email,
    gender,
    mobile,
    dateOfBirth,
    subjects,
    hobbies,
    picture,
    address,
    state,
    city,
  }: {
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    mobile?: string;
    dateOfBirth?: string;
    subjects?: string;
    hobbies?: string[];
    picture?: string;
    address?: string;
    state?: string;
    city?: string;
  }) {
    if (firstName || lastName) {
      await expect
        .soft(this.lblStudentNameValue)
        .toHaveText(`${firstName} ${lastName}`);
    }
    if (email) {
      await expect.soft(this.lblStudentEmailValue).toHaveText(email);
    }
    if (gender) {
      await expect.soft(this.lblGenderValue).toHaveText(gender);
    }
    if (mobile) {
      await expect.soft(this.lblMobileValue).toHaveText(mobile);
    }
    if (dateOfBirth) {
      await expect.soft(this.lblDateOfBirthValue).toHaveText(dateOfBirth);
    }
    if (subjects) {
      await expect.soft(this.lblSubjectsValue).toHaveText(subjects);
    }
    if (hobbies) {
      for (const hobby of hobbies) {
        await expect
          .soft(this.lblHobbiesValue)
          .toContainText(hobby, { ignoreCase: true });
      }
    }
    if (picture) {
      await expect.soft(this.lblPictureValue).toHaveText(picture);
    }
    if (address) {
      await expect.soft(this.lblAddressValue).toHaveText(address);
    }
    if (state || city) {
      await expect
        .soft(this.lblStateAndCityValue)
        .toHaveText(`${state} ${city}`);
    }
  }
}
