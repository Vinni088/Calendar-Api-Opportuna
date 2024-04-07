import httpStatus from 'http-status';
import supertest from 'supertest';
import factory from '../factories/index';
import app from '../../src/app'

const server = supertest(app);

describe('post /reminder', () => {
    beforeEach(async () => {
        await factory.clearDB()
    });

    afterEach(async () => {
        await factory.clearDB()
    });

    it('should respond with status 422 when body is not given', async () => {
        const response = await server.post('/reminder');

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have date', async () => {
        const response = await server.post('/reminder').send({
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have time', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have title', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "time": "09:00",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have description', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have city', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have color', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 201 when body is acceptable', async () => {
        const response = await server.post('/reminder').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        let reminders = await factory.readReminders();

        expect(response.status).toBe(httpStatus.CREATED);
        expect(reminders.length).toBeGreaterThan(0);
    });
});

describe('get /reminder', () => {
    beforeEach(async () => {
        await factory.clearDB()
    });

    afterEach(async () => {
        await factory.clearDB()
    });


    it('should respond with status 200 and no reminder', async () => {
        const response = await server.get('/reminder');

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body.length).toBe(0);
    });

    it('should respond with status 200 and 1 reminder', async () => {
        await factory.createReminder(
            "titulo 1",
            "descrição 1",
            "2024-04-07",
            "12:00",
            "brasília",
            "blue"
        )

        const response = await server.get('/reminder');

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body.length).toBe(1);
    });
});

describe('put /reminder/:id', () => {
    beforeEach(async () => {
        await factory.clearDB()
    });

    afterEach(async () => {
        await factory.clearDB()
    });

    it('should respond with status 422 when body is not given', async () => {
        const response = await server.put('/reminder/1');

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have date', async () => {
        const response = await server.put('/reminder/1').send({
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have time', async () => {
        const response = await server.put('/reminder/1').send({
            "date": "2024-04-04",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have title', async () => {
        const response = await server.put('/reminder/1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have description', async () => {
        const response = await server.put('/reminder/1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have city', async () => {
        const response = await server.put('/reminder/1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when body does not have color', async () => {
        const response = await server.put('/reminder/1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when id is invalid', async () => {
        const response = await server.put('/reminder/string').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when id is invalid', async () => {
        const response = await server.put('/reminder/-1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when id doesnt belong to an id', async () => {
        const reminder = await factory.createReminder(
            "titulo 1",
            "descrição 1",
            "2024-04-07",
            "12:00",
            "brasília",
            "blue"
        )

        const deletedReminder = await factory.deleteReminder(reminder.id);

        const response = await server.put(`/reminder/${reminder.id}`).send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 200', async () => {
        const reminder = await factory.createReminder(
            "titulo 1",
            "descrição 1",
            "2024-04-07",
            "12:00",
            "brasília",
            "blue"
        )

        const response = await server.put(`/reminder/${reminder.id}`).send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício 2",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body.title).toBe("Exercício 2");
    });
});

describe('delete /reminder/:id', () => {
    beforeEach(async () => {
        await factory.clearDB()
    });

    afterEach(async () => {
        await factory.clearDB()
    });


    it('should respond with status 422 when id is invalid', async () => {
        const response = await server.delete('/reminder/string').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when id is invalid', async () => {
        const response = await server.delete('/reminder/-1').send({
            "date": "2024-04-04",
            "time": "09:00",
            "title": "Exercício",
            "description": "Fazer exercícios físicos",
            "city": "São Paulo",
            "color": "blue"
        });

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 422 when id doesnt belong to an id', async () => {
        const reminder = await factory.createReminder(
            "titulo 1",
            "descrição 1",
            "2024-04-07",
            "12:00",
            "brasília",
            "blue"
        )

        const deletedReminder = await factory.deleteReminder(reminder.id);

        const response = await server.delete(`/reminder/${reminder.id}`);

        expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY);
    });

    it('should respond with status 200', async () => {
        const reminder = await factory.createReminder(
            "titulo 1",
            "descrição 1",
            "2024-04-07",
            "12:00",
            "brasília",
            "blue"
        )

        const response = await server.delete(`/reminder/${reminder.id}`);

        expect(response.status).toBe(httpStatus.OK);
    });
});