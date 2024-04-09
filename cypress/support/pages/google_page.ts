export class GooglePage {

    visit():void {
        cy.visit('https://www.google.com/')
        cy.contains('button', 'Tout accepter').click()
    }

    research(text:string):void {
        cy.get('textarea[role="combobox"]').type(`${text}{enter}`)
    }

    checkResearchResult(result: { linkTittle: string; link: string; linkDescription: string; preview: string }):void {
        cy.contains('a span', result.linkTittle).should('exist')
        cy.contains(`[href="${result.link}"]`, result.linkDescription).should('exist')
        cy.contains(result.preview)
    }
}