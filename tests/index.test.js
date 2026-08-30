// tests/index.test.js

const request = require('supertest');
const app = require('../src/index');

test('Deve responder com Hello World', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
});