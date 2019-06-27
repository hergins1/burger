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
        let queryString = "INSERT INTO ?? ('burger_name') VALUES ?";
        
        connection.query(queryString, [tableInput, value], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },

    updateOne: function(tableInput, objColVals, condition, cb){
        let queryString = "UPDATE" + tableInput +  "SET" + objColVals + "WHERE " + condition;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;