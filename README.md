# Instructions
## How To Start
 
 &nbsp;
## Hosted Application Link - https://zfunds-assignment-anujkaushik.netlify.app/

&nbsp;

## Command to set up the frontend locally
First Step - npm i (To install all dependencies for frontend)

Second Step - npm start (To run application)

## Command to set up the backend locally

First Step - cd .\server\

Second Step - npm i 

Third Step - nodemon .\server.js

## Features Implemented

### Personal Details Screen
The Personal Details Screen allows users to provide important personal information such as the father's name, mother's name, and email address. To ensure a seamless user experience, the screen offers several user-friendly features such as:

#### 1) Email Input: 
Users have the flexibility to choose their preferred email platform from a selection of 4 radio buttons, including gmail.com, yahoo.com, yahoo.co.in, and rediffmail.com.

#### 2) Martial Status & Annual Income: 
Users can also select their martial status and annual income by checking the appropriate checkboxes.

#### 3) Validations: 
To ensure the completeness and accuracy of the entered data, the screen includes validations that prevent users from proceeding until all required fields have been filled in.

&nbsp;
### Document Upload Screen
The Doc Upload Screen allows users to upload important documents and images, including photos, PAN cards, and signatures.

#### 1) Document Upload
Users can upload document images, including photos, PAN cards, and signatures.

#### 2) Image Preview
Users will be able to view the images they have uploaded in their respective sections for easy management.

#### 3) Validations
Validations are included to prevent users from proceeding until all docs have been uploaded.

&nbsp;
### Declaration Screen
The Declaration Screen is a simple and straightforward screen that requires users to make three important declarations.

#### 1) Declarations
The following declarations are mandatory and must be toggled on before proceeding:

* Indian Citizen
* Indian Tax Resident
* Not Politically Exposed

#### 2) Validations
Validations are in place to prevent users from proceeding if any of the declarations are not toggled on, ensuring the completeness and accuracy of the declarations made.


&nbsp;
### Review Screen

The Review Screen is the final step in the process and provides users with a comprehensive overview of all the information they have entered.

#### 1) Review Details
The Review Screen displays all the data that the user has entered in previous screens, including personal details and documents uploaded. These details are presented in an organized and easy-to-read format.

#### 2) Editable Details
Users have the option to edit their details if necessary. By clicking on the edit button, they will be navigated to the respective screen, such as the Personal Details Screen or the Doc Upload Screen.

#### 3) Terms and Conditions
Before proceeding, users must check the terms and conditions, ensuring that they agree to the terms outlined.

#### 4) Data Storage
The Review Screen also serves as the final storage for all the data entered by the user, including personal details and documents uploaded. This information will be stored under the user's father's name for easy access and management.

## Known Issues
Despite best efforts to provide a seamless user experience, there may be certain issues that arise during the use of the app. Below are two known issues that I have to work to resolve.

#### Email Input Validation
The current implementation of email input validation is not sufficient to prevent users from entering invalid email addresses. I have to work to implement a regular expression validation to ensure that only valid email addresses are accepted.

#### Image Uploading
There may be instances where the image uploading process does not work as expected, particularly when using Multer.

&nbsp;
### Things could have done better

Even with the best development practices, there is always room for improvement. Below are some areas where the app could be further enhanced to provide an even better user experience.

#### 1) Git Flow
Optimizing the Git flow could lead to better code management.

#### 2) GUI Enhancements
Improving the GUI, such as adding loaders during image uploading from a computer or implementing skeleton loaders, can greatly enhance the user experience. 

#### 3) Theme Changer
Adding a theme changer, allowing users to switch between light and dark modes, would greatly improve the customization options for the app.

&nbsp;
### Future Ideas for Code Development

#### 1) Jest for Unit Testing
 This will allow us to test the React components independently, ensuring that the user interface functions correctly and that validations on fields are working as expected. This will improve the overall reliability and quality of the application.

#### 2)Next.js Framework
Using the Next.js framework will make the application more scalable and help with server-side rendering, making it faster and more efficient.

#### 3)Authentication
 Adding authentication to the application, possibly using Firebase, will provide enhanced security for users' personal information and make it easier for them to access their data.

#### 4)Server-Side Implementation
 Improving the server-side implementation by having a good code structure will make the application more robust and able to handle larger amounts of data, making it more scalable for the future.

&nbsp;
### Different Libraries, Functionalities & Packages Used

The app utilizes a range of libraries, functionalities, and packages to provide a robust and feature-rich user experience. These include:

#### 1) Material UI 
Material UI is a library for creating user interfaces with a material design style. It offers pre-built components that simplify the design process and ensure a consistent look and feel.

#### 2) Redux
This library is used for managing the state of the application.

#### 3)Local Storage
This functionality is used for storing the data locally in the user's device.

#### 4)Axios
This library is used for making HTTP requests.

#### 5)Express
This framework is used for building the server-side of the application.

#### 6)Multer
This package is used for uploading files, such as images and documents.

#### 7)CORS
This library is used for handling Cross-Origin Resource Sharing (CORS) policies.

#### 8)React Router DOM
This library is used for routing in the application.

#### 9)Js Modules like fs, path
 These modules are used for handling file system and paths in the application.
