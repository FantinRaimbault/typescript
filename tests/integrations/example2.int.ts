
import request from 'supertest'
import app from '../../src/index'

describe('Integrations example', () => {

    it('should return Good Afternoon', async () => {
        const response = await request(app).get('/afternoon')
        expect(response.text).toBe('Good Afternoon')
    })

})