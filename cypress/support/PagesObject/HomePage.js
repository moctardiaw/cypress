class Homepage{

    acceptcookies(){

        cy.get('#sp-cc-accept').click();

    }

    searchproductfromsearchbar(){

        cy.get('#twotabsearchtextbox').type('Apple iPhone 13 Pro Max (256 Go) - Vert Alpin').click();
        cy.get('#nav-search-submit-button').click();

    }

}
export default Homepage = new Homepage();