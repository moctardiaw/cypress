class SearchResultpage{

    searchpage(){
        cy.wait(6000)
        cy.get('.a-section > .s-image:first').click()

    }
}
export default SearchResultpage = new SearchResultpage();