const db = require('../data/dbConfig.js')

module.exports ={



}

function get() {
    return db("cars")
}

function add(car){
    return db("cars")
    .insert(car, "id");
}


function remove (id) {
    return db("cars")
    .where("id", id)
    .delete();
}