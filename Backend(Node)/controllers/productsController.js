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
    getAllPaginate:async function(req, res, next){
      try{
        let queryFind = {}
        if(req.query.buscar){
          queryFind={
            name:{$regex:".*"+ req.query.buscar + ".*",$options:"i"}
          }
        }
        const products = await productsModel.paginate(queryFind,{
          populate:"category",
          limit:req.query.limit || 2,
          page:req.query.page || 1
        })
        res.json(products)
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
    create:async function(req, res, next){
       try{
         const product = new productsModel({
           name:req.body.name,
           sku:req.body.sku,
           description:req.body.description,
           price:req.body.price,
           quantity:req.body.quantity,
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