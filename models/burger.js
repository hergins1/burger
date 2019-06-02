const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insertOne: function(value, cb){
        orm.insertOne('burgers', value, function(res){
            cb(res);
        });
    },
};

module.exports = burger;