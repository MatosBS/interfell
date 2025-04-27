import { Locator, Page } from '@playwright/test';
import { BaseTest } from '../BaseTest';
import { SuccessModal } from './modals/SuccessModal';

export class PracticeFormPage extends BaseTest {
  lblTitle: Locator;
  lblFormTitle: Locator;
  txtFirstName: Locator;
  txtLastName: Locator;
  txtEmail: Locator;
  txtMobile: Locator;
  txtDateOfBirth: Locator;
  txtSubjects: Locator;
  txtPicture: Locator;
  txtAddress: Locator;
  drpState: Locator;
  drpCity: Locator;
  btnSubmit: Locator;
  successModal: SuccessModal;

  constructor(page) {
    super(page);
    this.lblTitle = this.page.getByRole('heading', { name: 'Practice Form' });
    this.lblFormTitle = this.page.getByRole('heading', {
      name: 'Student Registration Form',
    });

    this.txtFirstName = this.page.locator('#firstName');
    this.txtLastName = this.page.locator('#lastName');
    this.txtEmail = this.page.locator('#userEmail');
    this.txtMobile = this.page.locator('#userNumber');
    this.txtDateOfBirth = this.page.locator('#dateOfBirthInput');
    this.txtSubjects = this.page.locator('#subjectsInput');
    this.txtPicture = this.page.locator('#uploadPicture');
    this.txtAddress = this.page.locator('#currentAddress');
    this.drpState = this.page.locator('#react-select-3-input');
    this.drpCity = this.page.locator('#react-select-4-input');
    this.btnSubmit = this.page.getByRole('button', { name: 'Submit' });
    this.successModal = new SuccessModal(this.page);
  }

  async rbtGender(value: string) {
    return await this.page.locator(
      `div.custom-radio:has(input[value = '${value}'])`
    );
  }

  async chbHobbies(value: string) {
    return await this.page.locator('div.custom-checkbox').getByText(value);
  }

  async completeForm({
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
    if (firstName) {
      await this.txtFirstName.fill(firstName);
    }
    if (lastName) {
      await this.txtLastName.fill(lastName);
    }
    if (email) {
      await this.txtEmail.fill(email);
    }
    if (gender) {
      const genderRadio = await this.rbtGender(gender);
      await genderRadio.click();
    }
    if (mobile) {
      await this.txtMobile.fill(mobile);
    }
    if (dateOfBirth) {
      await this.txtDateOfBirth.fill(dateOfBirth);
    }
    if (subjects) {
      await this.txtSubjects.fill(subjects);
      await this.page.keyboard.press('Enter');
    }
    if (hobbies) {
      for (const hobby of hobbies) {
        await (await this.chbHobbies(hobby)).click();
      }
    }
    if (picture) {
      await this.txtPicture.setInputFiles(picture);
    }
    if (address) {
      await this.txtAddress.fill(address);
    }
    if (state) {
      await this.drpState.selectOption(state);
    }
    if (city) {
      await this.drpCity.selectOption(city);
    }
  }
}
