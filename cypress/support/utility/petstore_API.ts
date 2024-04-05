interface User {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    userStatus: number
}

interface ResBody {
    code: number
    type:string
    message:string
}

export class PetstoreApi {
    
    private baseURL: string

    constructor() {
        this.baseURL = 'https://petstore.swagger.io/v2/user/'
    }

    createUser(user: User): Cypress.Chainable<Cypress.Response<ResBody>> {
        return cy.request('POST', this.baseURL, user)
    }
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserByUsername(username: string, failOnStatusCode = true): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}${username}`,
            failOnStatusCode: failOnStatusCode
        })
    }

    updateUser(username: string, updatedUser: User): Cypress.Chainable<Cypress.Response<ResBody>> {
        return cy.request('PUT', `${this.baseURL}${username}`, updatedUser)
    }

    deleteUser(username: string): Cypress.Chainable<Cypress.Response<ResBody>> {
        return cy.request('DELETE', `${this.baseURL}${username}`)
    }

    checkResStatus(resStatus: number, expectedStatusCode: number):void {
        expect(resStatus).to.eq(expectedStatusCode)
    }

    checkResBody (resBody:ResBody, expectedCode:number, expectedType:string, expectedMessage:string):void {
        expect(resBody).to.have.property('code', expectedCode)
        expect(resBody).to.have.property('type', expectedType)
        expect(resBody).to.have.property('message', expectedMessage)
    }

    checkResUserProperties(resBody: User, expectedUser: User): void {
        expect(resBody).to.have.property('id', expectedUser.id)
        expect(resBody).to.have.property('username', expectedUser.username)
        expect(resBody).to.have.property('firstName', expectedUser.firstName)
        expect(resBody).to.have.property('lastName', expectedUser.lastName)
        expect(resBody).to.have.property('email', expectedUser.email)
        expect(resBody).to.have.property('password', expectedUser.password)
        expect(resBody).to.have.property('phone', expectedUser.phone)
        expect(resBody).to.have.property('userStatus', expectedUser.userStatus)
    }
}