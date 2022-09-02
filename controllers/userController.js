const UsersAuthenModel = require('../models/UsersAuthenModel')

// const redirect =  async (req,res) => {
//     let title = req.params.title
//       try{
//          let doc = await UsersAuthenModel.findOne({title})
//          res.redirect(doc.url)
//       }catch (error){
//          res.send(error)  
//       }
// }

const addUser = async (req, res) => {
      let userAdd = new UsersAuthenModel(req.body)
      try{
         let doc = await userAdd.save()
         res.render('index')           
      }catch (error){
         res.render('index', {error, body: req.body})      
      } 
} 

module.exports = {addUser}
