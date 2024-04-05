/// <reference types="cypress" />

import { AmazonPage } from '../../support/pages'

const amazonPage = new AmazonPage()

describe('Research on Amazon marketplace', () => {

    beforeEach(() => {
        amazonPage.visit()
    })

    it('Access to best seller products in the category IT', () => {
        amazonPage.NavigateToBestSellersInCategory('Informatique')
        amazonPage.checkTittle('h1', 'Les meilleures ventes en Informatique')
        amazonPage.seeProductCard()
    })

    it('Search for a blender and sort the results by price ascending order', () => {
        amazonPage.searchWithKeyWords('Blender')
        amazonPage.seeProductCardWithText('Blender')
        amazonPage.sortBy('price-asc-rank')
        amazonPage.checkPriceAscOrder()
    })
})