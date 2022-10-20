/*describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.fr/')
    cy.get('#sp-cc-accept').click()
    cy.get('#nav-link-accountList > .nav-line-2').click()
  })
})*/

import Homepage from "../support/PagesObject/Homepage"
import SearchResultPage from "../support/PagesObject/SearchResultPage"

describe('empty spec', () => {

    it('passes', () => {
        cy.visit('https://www.amazon.fr/')
        Homepage.acceptcookies();
        Homepage.searchproductfromsearchbar();
        SearchResultPage.searchpage();

    })
})