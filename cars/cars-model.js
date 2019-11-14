const db = require('../data/dbConfig.js')

module.exports ={
get,
insert,
remove,
}

function get() {
    return db("cars")
}

function insert(car){
    return db("cars")
    .insert(car, "id");
}


function remove (id) {
    return db("cars")
    .where("id", id)
    .delete();
}