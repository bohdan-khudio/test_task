declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginAsUser(): Chainable<any>
        fillShippingInfo(): Chainable<any>
    }
}