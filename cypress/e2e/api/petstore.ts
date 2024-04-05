/// <reference types="cypress" />

import { PetstoreDatas } from '../../fixtures/datas'
import { PetstoreApi } from '../../support/utility/petstore_API'

const petstoreDatas = new PetstoreDatas()
const petstoreApi = new PetstoreApi()

describe('User management with API Petstore', () => {

    it('Create a new user', () => {
        petstoreApi.createUser(petstoreDatas.user)
            .then(res => {
                petstoreApi.checkResStatus(res.status, 200)
                petstoreApi.checkResBody(res.body, 200, 'unknown', `${petstoreDatas.user.id}`)
            })
    })

    it('Get the new user to check if he has been created', () => {
        petstoreApi.getUserByUsername(petstoreDatas.user.username)
            .then(res => {
                petstoreApi.checkResStatus(res.status, 200)
                petstoreApi.checkResUserProperties(res.body, petstoreDatas.user)
            })
    })

    it('Update the user', () => {
        petstoreApi.updateUser(petstoreDatas.updatedUser.username, petstoreDatas.updatedUser )
            .then(res => {
                petstoreApi.checkResStatus(res.status, 200)
                petstoreApi.checkResBody(res.body, 200, 'unknown', `${petstoreDatas.updatedUser.id}`)
            })
    })

    it('Get the user to check if he has been updated', () => {
        petstoreApi.getUserByUsername(petstoreDatas.updatedUser.username)
            .then(res => {
                petstoreApi.checkResStatus(res.status, 200)
                petstoreApi.checkResUserProperties(res.body, petstoreDatas.updatedUser)
            })
    })

    it('Delete the user', () => {
        petstoreApi.deleteUser(petstoreDatas.updatedUser.username)
            .then(res => {
                petstoreApi.checkResStatus(res.status, 200)
                petstoreApi.checkResBody(res.body, 200, 'unknown', `${petstoreDatas.updatedUser.username}`)
            })
    })

    it('Get the user to check if he has been deleted', () => {
        petstoreApi.getUserByUsername(petstoreDatas.updatedUser.username, false)
            .then(res => {
                petstoreApi.checkResStatus(res.status, 404)
                petstoreApi.checkResBody(res.body, 1, 'error', 'User not found')
            })
    })
})
