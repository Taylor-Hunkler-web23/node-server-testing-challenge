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

it('should return an api property with the value up inside the body', async () => {

    const res = await request (server).get('/') 
      

            expect(res.body).toEqual({api: "server running"}); 
         
        
})

