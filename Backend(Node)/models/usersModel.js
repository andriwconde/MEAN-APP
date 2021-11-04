const mongoose = require('../bin/mongodb')
const errorMessage = require('../utils/errorMessage')
const validators = require('../utils/validators')
const bcrypt = require("bcrypt")
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[3,errorMessage.GENERAL.minLength]
    },
    email:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        unique:true,
        validate:{
            validator:function(value){
            return validators.emailValidate(value)
            },
            message:errorMessage.USERS.emailValidate
        }
    },
    password:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function(value){
            return validators.isGoodPassword(value)
            },
            message:errorMessage.USERS.passwordValidate
        }
    }
})
usersSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    next()
})
module.exports = mongoose.model("users",usersSchema)