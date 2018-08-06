const db = require("../models")

module.exports = {
    find: function(req, res){
        db.Article
        .find({})
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }, 
    create: function(req,res){
        db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function(req,res){
        db.Article
        .findById(req.params.id)
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}