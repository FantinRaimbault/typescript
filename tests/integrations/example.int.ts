
import request from 'supertest'
import app from '../../src/index'
describe('Integrations example', () => {

    it.only('should return Hello World', async () => {
        const response = await request(app).get('/')
        expect(response.text).toBe('Hello World')
    })

    it('should return Goodbye World', async () => {
        const response = await request(app).get('/goodbye')
        expect(response.text).toBe('Goodbye World')
    })

})