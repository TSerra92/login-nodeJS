const bcrypt = require("bcrypt")

async function bcryptCreate(value){
    const salt = await bcrypt.genSalt(12)
    const bcryptValue = await bcrypt.hash(value, salt)
    return bcryptValue
}

async function bcryptCompare(value1, value2){
    return bcrypt.compare(value1, value2)
}

module.exports = {
    bcryptCreate,
    bcryptCompare
}