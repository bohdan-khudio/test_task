describe('UI Tests', () => {

    beforeEach(() => {
        cy.clearAllLocalStorage();
        cy.visit('/');
    });

    it('should user login successfully with valid credentials', () => {
        cy.loginAsUser();
        cy.get('[data-test="title"]').should('contain', 'Products');
    });

    it('should show an error on invalid credentials', () => {
        cy.get('[data-test="username"]').type('invalid_user');
        cy.get('[data-test="password"]').type('invalid_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('.error-message-container').should('be.visible');
    });

    it('should masking password input masking', () => {
        cy.get('[data-test="password"]').type('secret_password');
        cy.get('[data-test="password"]').should('have.attr', 'type', 'password');
    });

    it('should user make a purchase', () => {
        cy.loginAsUser();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.fillShippingInfo();
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });

});