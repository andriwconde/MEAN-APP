const mongoose = require('../bin/mongodb')
const errorMessage = require('../utils/errorMessage')
const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[3,errorMessage.GENERAL.minLength]
    },

    picture: {
        type:String,
    },
    code:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
    },
    description:{
        type:String,
    required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    price:{
        type:String,
        min:1,
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    }
})
//se crea una propiedad al traer los datos 
productsSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model("products",productsSchema)