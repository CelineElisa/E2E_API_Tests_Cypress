# E2E_API_Tests_Cypress

## Install

Clone the GitHub repository
```sh
git clone git@github.com:CelineElisa/E2E_API_Tests_Cypress.git
```

Move to the directory
```sh
cd E2E_API_Tests_Cypress
```

Install the packages
```sh
npm install
```
Create a "cypress.env.json" file in the folder root and add it the env variables as in the "cypress.env.json.template" file. You can use any string for the password and the username.

## Run

### Using Cypress user interface

```sh
npm run cypress:open
```
then choose E2E testing

### Using Cypress headless

```sh
npm run cypress:run
```
