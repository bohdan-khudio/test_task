describe('API Tests', () => {

    before( () => {
        Cypress.config('baseUrl', Cypress.env('apiUrl'));
    });

    it('should create post', () => {
        cy.request({
            method: 'POST',
            url: '/posts',
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
        });
    });

    it('should return 400 for invalid post', () => {
        cy.request({
            method: 'POST',
            url: '/posts',
            body: {
                title: '',
                body: '',
                userId: 1,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('should get post by ID', () => {
        cy.request({
            method: 'GET',
            url: '/posts/1',
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 1);
        });
    });

    it('should return 404 for non-existing post', () => {
        cy.request({
            method: 'GET',
            url: '/posts/99999',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('should update post', () => {
        cy.request({
            method: 'PUT',
            url: '/posts/1',
            body: {
                id: 1,
                title: 'foo updated',
                body: 'bar updated',
                userId: 1,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'foo updated');
        });
    });

    it('should return 404 for non-existing post on update', () => {
        cy.request({
            method: 'PUT',
            url: '/posts/99999',
            body: {
                id: 99999,
                title: 'foo updated',
                body: 'bar updated',
                userId: 1,
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });

    it('should delete post', () => {
        cy.request({
            method: 'DELETE',
            url: '/posts/1',
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});