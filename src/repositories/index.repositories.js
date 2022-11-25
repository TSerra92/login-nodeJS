const models = require('../models/index')

async function findAll(model, args={}){
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

//Model vai definir a tabela a ser atualizada, newInfo é a nova informação passada como um objeto e args são as opções. Ex: Where, Include e Etc.
async function update(model, newInfo, args={}){
    return await models[model].update(newInfo, args)
}

async function destroy(model, args={}){
    return await models[model].destroy(args)
}

async function bulkCreate(model, arr){
    return await models[model].bulkCreate(arr)
}


module.exports = {
    findAll,
    findOne,
    findByPk,
    create,
    update,
    destroy,
    bulkCreate
}