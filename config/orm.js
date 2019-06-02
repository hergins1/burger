const connection = require("../config/connection.js");

let orm = {
    selectAll: function(tableInput, cb){
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    
    insertOne: function(tableInput, value, cb) {
        var queryString = "INSERT INTO ?? ('burger_name') VALUES ?";
        
        connection.query(queryString, [tableInput, value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },

    updateOne()
}

module.exports = orm;