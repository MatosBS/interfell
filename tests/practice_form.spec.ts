import { test, expect } from '../support/pageObjects_fixtures';
import { fa, faker } from '@faker-js/faker';

test.describe('Practice Form', () => {
  test.beforeEach(async ({ homePage, formsPage }) => {
    await homePage.goTo();
    await homePage.btnForms.click();

    await formsPage.lnkPracticeForm.click();
  });

  test('Should validate screen completeness', async ({ practiceFormPage }) => {
    await expect.soft(practiceFormPage.lblTitle).toBeVisible();
    await expect.soft(practiceFormPage.lblFormTitle).toBeVisible();
    await expect.soft(practiceFormPage.txtFirstName).toBeVisible();
    await expect.soft(practiceFormPage.txtLastName).toBeVisible();
    await expect.soft(practiceFormPage.txtEmail).toBeVisible();
    await expect.soft(await practiceFormPage.rbtGender('Male')).toBeVisible();
    await expect.soft(await practiceFormPage.rbtGender('Female')).toBeVisible();
    await expect.soft(await practiceFormPage.rbtGender('Other')).toBeVisible();
    await expect.soft(practiceFormPage.txtMobile).toBeVisible();
    await expect.soft(practiceFormPage.txtDateOfBirth).toBeVisible();
    await expect.soft(practiceFormPage.txtSubjects).toBeVisible();
    await expect
      .soft(await practiceFormPage.chbHobbies('Sports'))
      .toBeVisible();
    await expect
      .soft(await practiceFormPage.chbHobbies('Reading'))
      .toBeVisible();
    await expect.soft(await practiceFormPage.chbHobbies('Music')).toBeVisible();
    await expect.soft(practiceFormPage.txtPicture).toBeVisible();
    await expect.soft(practiceFormPage.txtAddress).toBeVisible();
    await expect.soft(practiceFormPage.drpState).toBeVisible();
    await expect.soft(practiceFormPage.drpCity).toBeVisible();
    await expect(practiceFormPage.btnSubmit).toBeVisible();
  });

  test.describe('Validate form fields', () => {
    test('Should validate required fields', async ({ practiceFormPage }) => {
      await expect
        .soft(practiceFormPage.txtFirstName)
        .toHaveAttribute('required');
      await expect
        .soft(practiceFormPage.txtLastName)
        .toHaveAttribute('required');
      await expect(practiceFormPage.txtMobile).toHaveAttribute('required');
    });
  });

  test('Should complete form correctly and validate success message', async ({
    practiceFormPage,
  }) => {
    const formData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: 'Male',
      mobile: faker.string.numeric(10),
    };
    await practiceFormPage.completeForm(formData);
    await practiceFormPage.btnSubmit.click();

    await expect(practiceFormPage.successModal.modal).toBeVisible();
    await expect
      .soft(practiceFormPage.successModal.lblTitle)
      .toHaveText('Thanks for submitting the form');
    await practiceFormPage.successModal.validateForm(formData);
  });
});
