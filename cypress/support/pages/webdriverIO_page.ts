export class WebdriverIOPage {

    visit():void {
        cy.visit('https://webdriver.io/fr/')
    }

    clickOnNavLink(text:string):void {
        cy.contains('a', text).click()
    }

    checkElementsText(elements: Record<string, string>):void {
        for (const [element, text] of Object.entries(elements)) {
            cy.contains(element, text).should('exist')
        }
    }

    checkCodeFrame():void {
        cy.get('article code').should('exist')
    }

    switchLanguage(language:string):void {
        cy.contains('a', language).click({force: true})
    }

    search(keywords:string):void {
        cy.contains('Search').click()
        cy.get('form input').type(keywords)
    }

    clickOnText(text:string):void {
        cy.contains(text).click()
    }
}