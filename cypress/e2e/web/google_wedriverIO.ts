/// <reference types="cypress" />

import { GooglePage, WebdriverIOPage } from '../../support/pages'
import { GoogleWebdriverIODatas } from '../../fixtures/datas'

const googlePage = new GooglePage()
const webdriverIOPage = new WebdriverIOPage()
const googleWebdriverIODatas = new GoogleWebdriverIODatas()

describe('Navigation in webdriverIO website', () => {

    it('Find Webdriver website in Google research results', () => {
        googlePage.visit()
        googlePage.research('WebdriverIO')
        googlePage.checkResearchResult(googleWebdriverIODatas.googleResult)
    })

    context('The user is connected on the WebdriverIO website', () => {
        beforeEach(() => {
            webdriverIOPage.visit()
        })

        it('Access to "Core Concepts" documentation using the navigation bar', () => {
            webdriverIOPage.clickOnNavLink('Docs')
            webdriverIOPage.clickOnNavLink('Concepts de base')
            webdriverIOPage.clickOnNavLink('Setup Types')
            webdriverIOPage.checkElementsText(googleWebdriverIODatas.setUpTypesPage)
            webdriverIOPage.checkCodeFrame()
        })

        it('Switch to English language ', () => {
            webdriverIOPage.switchLanguage('English')
            webdriverIOPage.checkElementsText(googleWebdriverIODatas.englishPage)
        })

        it('Use the search bar to find the best practices ', () => {
            webdriverIOPage.switchLanguage('English')
            webdriverIOPage.search('Best practices')
            webdriverIOPage.clickOnText('Use resilient selectors')
            webdriverIOPage.checkElementsText(googleWebdriverIODatas.bestPracticesPage)
        })
    })
})