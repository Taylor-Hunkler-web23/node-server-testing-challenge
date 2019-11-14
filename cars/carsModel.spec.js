const db = require('../data/dbConfig.js');

const { insert} = require('./cars-model.js');
const { remove} = require('./cars-model.js');


 describe('cars model', function(){

    describe('insert()', function(){

            beforeEach(async () => {
                await db('cars').truncate();

            })


        it('should insert a car', async function() {

            //insert a car into the DB
            await insert({name: 'camaro'})
                
            //check if it was inserted into the database

        const cars = await db ("cars");
        expect(cars).toHaveLength(1)


        });

        it("should insert the provided cars", async function () {
            //insert a car
            await insert({ name: "camaro"});
            await insert({ name: "mustang"});

            const cars = await db ("cars");

           
            expect(cars[0].name).toBe("camaro");
            expect(cars[1].name).toBe("mustang");
        })
    
    })



    describe('remove()', function(){

        beforeEach(async () => {
            await db('cars').truncate();

        })


    it('should remove a car', async function() {

        const [id] = await insert({name: 'camaro'})
            
      
    const cars = await db ("cars");

    expect(cars).toHaveLength(1)

    await remove(id)

   const newcars = await db("cars")

    expect(newcars).toHaveLength(0)


    });



})
 })