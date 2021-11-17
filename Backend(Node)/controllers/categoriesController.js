const categoriesModel = require('../models/categoriesModel');

module.exports={
    getAll:async function(req, res, next){
      try{
        const categories = await categoriesModel.find()
        res.json(categories)
      }catch(e){
        console.log(e)
      }
      next()
    },
    create:async function(req, res, next){
       try{
         const category = new categoriesModel({
           name:req.body.name,
          })
          const documento = await category.save()
          res.json(documento)
        }catch(e) {
          next(e)
          res.json({'error':true,'message':e.message})
        }
      },
      delete:async function(req, res, next){
        try{
          const category = await categorysModel.deleteOne({_id:req.params.id})
          res.json(category)
  
        }catch(e){
          next(e)
        }
      }
}