const request = require('supertest');
const app = require('../src/app');

describe('Teste da API', () => {
    test('Deve responder com Hello World', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World');
    });
});