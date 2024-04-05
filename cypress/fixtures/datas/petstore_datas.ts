export class PetstoreDatas {

    user: {
        id: number
        username: string
        firstName: string
        lastName: string
        email: string
        password: string
        phone: string
        userStatus: number
    }

    updatedUser: {
        id: number
        username: string
        firstName: string
        lastName: string
        email: string
        password: string
        phone: string
        userStatus: number
    }

    constructor() {
        
        this.user = {
            id: 43,
            username: `${Cypress.env('PETSTORE_USERNAME')}`,
            firstName: 'Celine',
            lastName: 'QATesteur',
            email: 'celine.qa@gmail.com',
            password: `${Cypress.env('PETSTORE_USER_PASSWORD')}`,
            phone: '0634677788',
            userStatus: 20
        }
        this.updatedUser = {
            id: 43,
            username: `${Cypress.env('PETSTORE_USERNAME')}`,
            firstName: 'Cecile',
            lastName: 'QATesteuse',
            email: 'celine.test@gmail.com',
            password: `${Cypress.env('PETSTORE_USER_PASSWORD')}`,
            phone: '0634679999',
            userStatus: 21
        }
    }
}