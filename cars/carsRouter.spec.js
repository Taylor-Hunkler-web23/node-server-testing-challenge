const request = require('supertest'); //bring in supertest

const server = require('../api/server.js') //bring in server


describe('cars router', function () {
    describe('get', function () {
        it('should return 200 OK', function () {

            return request(server) 
                .get('/cars')    
                .then(res => {

                    expect(res.status).toBe(200); 
                })
        })
    })
})


