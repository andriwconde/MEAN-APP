const mongoose = require('../bin/mongodb')
const errorMessage = require('../utils/errorMessage')
const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minlength:[3,errorMessage.GENERAL.minLength]
    },
    sku: {
        type:String,
    required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    description:{
        type:String,
    required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    price:{
        type:String,
        min:1,
        //modifica el valor antes de insertar en db(se guardan modificados)
        set: function(value){
            return value/5
        },
        //modifica el valor despues de insertar en db(se modifican al traer el valor)
        get: function(value){
            return value*10
        },
    },
    quantity:{
        type:Number,
    required:[true,errorMessage.GENERAL.campo_obligatorio]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    }
})
//se crea una propiedad al traer los datos 
 productsSchema.virtual("price_currency").get(function(){
    return "$" + this.price
}) 
productsSchema.plugin(mongoose.mongoosePaginate)
productsSchema.set("toJSON",{getters:true,setters:true})
module.exports = mongoose.model("products",productsSchema)