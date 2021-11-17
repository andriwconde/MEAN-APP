const productsModel = require('../models/productsModel');
const categoryModel = require('../models/categoriesModel')

module.exports={
    getAll:async function(req, res, next){
      try{
        const products = await productsModel.find().populate("category")
        res.json(products)
      }catch(e){
        next(e)
      }
    },
    getAllProductsByCategory:async function(req, res, next){
      try{
        const products = await productsModel.find()
        const productsByCategory = products.filter(product => product.category == req.params.categoryId)
        res.json(productsByCategory)
      }catch(e){
        next(e)
      }
    },

    getById:async function(req, res, next){
      try{
        const product = await productsModel.findById(req.params.id)
        res.json(product)
      }catch(e){
        next(e)
      }
    },
    getByCategory:async function(req, res, next){
      try{
        const products = await productsModel.findById(req.params.category._id)
        res.json(products)
      }catch(e){
        next(e)
      }
    },
    create:async function(req, res, next){
       try{
         const product = new productsModel({
           code:req.body.code,
           name:req.body.name,
           description:req.body.description,
           price:req.body.price,
           picture:req.body.picture,
           category:req.body.categoryId,
          })
          const documento = await product.save()
          res.json(documento)
        }catch(e){
          next(e)
        }
      },
    update:async function(req, res, next){
      try{
        //pasar la categoria en el front como category para actualizar el elemento
        const product = await productsModel.updateOne({_id:req.params.id},req.body)
        res.json(product)
      }catch(e){
        next(e)
      }
    },
    delete:async function(req, res, next){
      try{
        const product = await productsModel.deleteOne({_id:req.params.id})
        res.json(product)

      }catch(e){
        next(e)
      }
    } 
}