const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insertOne: function(name, cb){
        orm.insertOne('burgers', ['burger_name', 'devoured'],
        [name, false],
            cb);        
    },

    updateOne: function(id, cd) {
        let condition = 'id=' + id;
        orm.updateOne('burgers', {
            devoured: true
        }, condition, cd);
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
};

module.exports = burger;