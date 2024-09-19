import OpenSite from "../pages/openSite";
import { Given } from '@badeball/cypress-cucumber-preprocessor';

const openSite = new OpenSite();

Given('I open the site', () => {
    openSite.visit();
  });

