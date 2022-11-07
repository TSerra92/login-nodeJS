const models = require('../models/index')

async function findAll(model, args){
    args ? args : args = {}
    return await models[model].findAll(args);
}

async function findOne(model, args){
    return await models[model].findOne(args)
}

async function findByPk(model, args){
    return await models[model].findByPk(args)
}

async function create(model, obj){
    return await models[model].create(obj)
}

async function update(obj, newObj){
    return await obj.update(newObj)
}

module.exports = {
    findAll,
    findOne,
    findByPk,
    create,
    update
}