const request = require('supertest'); //bring in supertest

const server = require('../api/server.js') //bring in server

const db = require('../data/dbConfig.js')

const cars = require('./cars-model.js')

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


describe('remove()', function () {

    beforeEach(async () => {
        await db('cars').truncate();

    })


    it('should respond with status 200', async function () {

        await cars.insert({ name: "Truck" });

        await request(server)
            .delete("/cars/1")
            .then(res => {
                expect(res.status).toBe(200)
            })




    });



})



describe('add()', function () {




    it('should respond with status 200', async function () {

   

        await request(server)
            .post("/cars")
            .send({ name: "Jeep"})
            .then(res => {
                expect(res.status).toBe(201)
            })




    });



})

describe('get', function () {
    describe('GET /', function () {
        it('should return json formated response', function () {

            return request(server)  
                .get('/')    
                .then(res => {

                    expect(res.type).toMatch(/json/i); 
                })
        })
    })
})