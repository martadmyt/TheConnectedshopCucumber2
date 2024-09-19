import { Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/homePage';
const homePage = new HomePage();

Then('I check the title of the home page', () =>{
    homePage.checkTitleHomePage();
    homePage.checkURLHomePage();
})

