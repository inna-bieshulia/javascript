const axios = require('axios');

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

describe('JSONPlaceholder /posts API', () => {
    test('GET /posts/1', async () => {
        const res = await api.get('/posts/1');

        expect(res.status).toBe(200);
        expect(typeof res.data).toBe('object');
        expect(res.data).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                id: expect.any(Number),
                title: expect.any(String),
                body: expect.any(String),
            })
        );
    });

    test('POST /posts', async () => {
        const payload = {
            title: 'QA Test Title',
            body: 'QA Test Body',
        };

        const res = await api.post('/posts', payload);

        expect(res.status).toBe(201);
        expect(res.data).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: payload.title,
                body: payload.body,
            })
        );
    });

    test('PUT /posts/1', async () => {
        const updated = {
            title: 'Updated Title',
            body: 'Updated Body Content',
        };

        const res = await api.put('/posts/1', updated);

        expect(res.status).toBe(200);
        expect(res.data).toEqual(
            expect.objectContaining({
                title: updated.title,
                body: updated.body,
            })
        );
    });

    test('DELETE /posts/1', async () => {
        const res = await api.delete('/posts/1');
        expect(res.status).toBe(200);
        expect(res.data).toEqual({});
    });
});
