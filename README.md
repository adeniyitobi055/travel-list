# TRAVEL LIST

Keep track of your travel items

## Project Description

Keeping track of travel items to ensure that nothing is forgotten while packing is essential. This project is designed to help users create checklists of items needed for their trips, ensuring that all items are packed, even in emergency situations. Additionally, the project provides notifications when all items have been packed for the trip.

## Team Members

- Onajite Kobimowe
- Kelvin Onumajuru
- Antony Mbugua
- Oluwatobi Adeniyi

## PROJECT SETUP

### INSTALLATION

To get started with this project follow these steps:

1. Clone the repository to your local machine:
   `git clone https://github.com/adeniyitobi055/travel-list`
2. Navigate to the project directory:
   `cd travel-list`
3. Install project dependencies using npm:
   `npm install`

## RUN THE PROJECT

`npm start`
Runs the app in the development mode.

**open http://localhost:300 to view it in your browser.**
The page will reload when you make changes, and any lint errors will be displayed in the console.

### TESTING

`npm test`
Launches the test runner in the interactive watch mode. This is used for running automated tests to verify the functionality of the application. The tests are written using `Mocha`, `Sinon`, `jest` and `Chai`. You can find the test files in the **src/tests directory**.

### Building for Production

To build the application for production, use the following command:
`npm run build`

- This command will create a production-ready build of the application in the build folder.
- The build process optimizes the code for performance and minifies it to reduce file size.
- The resulting build is suitable for deployment to a web server or hosting platform.

### Ejecting (Advanced Configuration)

**Note:\*** Ejecting is a one-way operation and should be done with caution. It gives you full control over the configuration files and dependencies, but it's irreversible.

To eject from the default configuration and gain full control over the build tool and configuration choices, use the following command:
`npm run eject`

| JAVASCRIPT FILES                                              | CSS FILES                                                       | TEST FILES                                             | DUTIES                                                                                                                  | COMPONENTS            |
| ------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [App.js](./src/components/App/App.js)                         | [App.css](./src/components/App/App.css)                         | [App.test.js](./src/tests/App.test.js)                 | The React component is the parent of the application housing all other components                                       | App component         |
| [Form.js](./src/components/Form/Form.js)                      | [Form.css](./src/components/Form/Form.css)                      | [Form.test.js](./src/tests/Form.test.js)               | This React component is a sub component that holds the input elements of the items                                      | Form component        |
| [Item.js](./src/components/Item/Item.js)                      | [Items.css](./src/components/Item/Item.css)                     | [Item.test.js](./src/tests/Item.test.js)               | This React component is the component that holds each items inputed into the packinglist component.                     | Item component        |
| [Logo.js](./src/components/Logo/Logo.js)                      | [Logo.css](./src/components/Logo/Logo.css)                      | [Logo.test.js](./src/tests/Logo.test.js)               | This React Logo component displays the logo for the "Far Away" application.                                             | Logo component        |
| [PackingList.js](./src/components/PackingList/PackingList.js) | [PackingList.css](./src/components/PackingList/PackingList.css) | [PackingList.test.js](./src/tests/PackingList.test.js) | This React PackingList component is responsible for displaying a list of items with sorting and clearing functionality. | PackingList component |
| [Stats.js](./src/components/Stats/Stats.js)                   | [Stats.css](./src/components/Stats/Stats.css)                   | [Stats.test.js](./src/tests/Stats.test.js)             | This React Stats component displays statistics related to the packing list.                                             | Stats components      |
