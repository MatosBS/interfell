
# interfell
## Introduction
For develop the exercise, I took advantage of the situation and developed the tests using Playwright & TypeScript, framework that I have been learning for the last weeks.

I wrote the test cases I would create and execute in the _Practice Form_ page, and I select three of them to develop.

Once the execution is finished, list report is displayed in the console. Also, in case of a failer, a html report is generated containing the log and the screenshot of the moment of the failure

The main issue is that the https://demoqa.com/ always takes some seconds to load, what generates some delay in execution of each test case.

I implemented the POM pattern to create the page objects.

And also the faker library to generate random data

## How to run the test cases?
1. Clone the repo
2. Run `npm install`
3. Run `npm run test`


# Test Cases
### Form submissions
- Should validate screen completeness **(Automated)**
- Validate form fields
    - Should validate required fields **(Automated)**
    - Should validate accepted characters in First name field
    - Should validate accepted characters in Last name field
    - Should validate accepted characters in Email field
    - Should validate invalid Email
    - Should validate invalid Birth date
    - Should validate future Birth date
    - Should validate accepted characters in Picture field
    - Should validate accepted characters in Subjects field
    - Should validate accepted characters in Current Address field
- Should complete form correctly and validate success message **(Automated)**


# Defect Reporting:
### Example
_Title_

Form - Practice Form - Student Registration Form: it is being possible to insert a future date of birth 


_Description_

When user is completing the Student Registration form, it is being possible to select and/or insert manually a future value in the Date of Birth field.

1. Go to home
1. Go to Forms
1. Go to Practice Form
1. Complete all fields correctly
1. Click on the Date of Birth field
1. Select a future value in the calendar
1. Click on the Submit button


_Actual Result_

No error is being displayed.
Form is submitted correctly.


_Expected Result_

It should not be possible to select a future value in the calendar.
Error message should be displayed when user inserts manually a future date of birth
