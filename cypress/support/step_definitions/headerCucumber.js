import Header from "../pages/header";
import { Then } from '@badeball/cypress-cucumber-preprocessor';
const header = new Header();

Then('I check the header elements', () =>{
     header.checkHeaderExisted();
     header.checkLogoTransparent();
     header.checkLogoPrimary();
     header.checkLogoUrl();
     header.checkMenu();
     header.checkMenuItems();
     header.checkAccountSearchCart();
})