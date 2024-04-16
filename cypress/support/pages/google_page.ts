export class GooglePage {

    visit():void {
        cy.visit('https://www.google.com/', {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', { value: 'en-gb' });
                Object.defineProperty(win.navigator, 'languages', { value: ['en-gb'] });
                Object.defineProperty(win.navigator, 'accept_languages', { value: ['en-gb'] });
                },
                headers: {
                'Accept-Language': 'en-gb',
                },
              
        })
        cy.get('[id="L2AGLb"]').click()
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