const request = require('supertest'); //bring in supertest

const server = require('./server.js') //bring in server

//same steps as doing manually
describe('server', function () {
    describe('GET /', function () {
        it('should return 200 OK', function () {

            return request(server) 
                .get('/')    
                .then(res => {

                    expect(res.status).toBe(200); 
                })
        })
    })
})

