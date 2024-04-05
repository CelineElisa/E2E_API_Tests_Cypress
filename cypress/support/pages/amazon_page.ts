export class AmazonPage {

    visit():void {
        cy.visit('https://www.amazon.fr/')
        cy.get('[name="accept"]').click()
    }

    NavigateToBestSellersInCategory(category:string):void {
        cy.contains('Meilleures ventes').click()
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.contains('[data-csa-c-type="widget"] a', category).click()
    }

    checkTittle(headingLevel:string, text:string):void {
        cy.contains(headingLevel, text).should('exist')
    }

    seeProductCard():void {
        cy.get('[data-a-card-type="basic"]').should('exist')
    }

    seeProductCardWithText(text:string):void {
        cy.contains('[data-component-type="s-search-result"]', text).should('exist')
    }

    searchWithKeyWords(text:string):void {
        cy.get('[name="field-keywords"]').type(`${text}{enter}`)
    }

    sortBy(option:string):void {
        cy.get('select[id="s-result-sort-select"]').select(option, {force: true})
    }

    checkPriceAscOrder():void {
        const pricesTab: number[] = []
        cy.get('[data-component-type="s-search-result"] [data-cy="price-recipe"]').then((prices)=>{
            Array.prototype.slice.call(prices).forEach(element => {
                pricesTab.push(parseFloat(element.textContent.replace(' €', '').replace(',', '.')))
            })
            expect(pricesTab[1]).to.be.at.least(pricesTab[0])
            expect(pricesTab[2]).to.be.at.least(pricesTab[1])
        })
    }
}