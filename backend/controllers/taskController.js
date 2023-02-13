const tasks =require("../model/taskModel")

exports.getAllUsers=async(req,res)=>{
    try{
        const User= await tasks.find()
        res.status(200).json({
            message:"success",
            User
        })
    }
    catch(err){
        res.status(404).json({
            message:"Something went wrong",
            message:err.message
        })
        
    }

}
exports.getOneUser=async(req,res)=>{
    try{
        const User= await tasks.findById(req.params.id)
        res.status(200).json({
            status:"success",
            User
        })
    }
    catch(err){
        res.status(404).json({
           status:"falied",
           message:err.message
        })
    }

}
exports.registerTask=async (req,res)=>{
    try{
        console.log("posted")
        const newUser=await tasks.create(req.body)
        res.status(201).json({
            status:'success',
            data:{
                newUser
            }
        })}
        catch(err){
            console.log("failed")
            res.status(404).json({
                status:'fail',
                message:err.message

            })
        }
    }
    exports.updateTask=async (req,res)=>{
        try{
            const User=await tasks.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true
            })
            console.log(req.body)
            res.status(200).json({
                status:'success',
                User
            })
            
            }
            catch(err){
                res.status(404).json({
                    status:"fail",
                    message:err.message
                }
                    )
            }
    }
   