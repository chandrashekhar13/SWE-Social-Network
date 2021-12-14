const  router = require('express').Router()

const User = require('../models/User')

router.get('/',async(req,res)=>{
          const queryname = req.query.name;
          const search = req.params.id
          try{
                    const user =  await User.find()
                    //let sortedProducts = [...products]
                    console.log("user",queryname)
                    console.log("UUU",search)
                    
                    let sortedUser = user.filter((id)=>{
                            return id.username.startsWith(search)
                    })
                    
                    res.status(200).json(user)
                }catch(error){
                    res.status(500).json("error")
          }
})

module.exports = router