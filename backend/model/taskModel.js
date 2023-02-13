const mongoose= require("mongoose")
const taskSchema= new mongoose.Schema(
    {
        title:{
            type: String,
            unique:true

        },
        taskDescription:{
            type :String,
            
        },
        archived:{
            type: String,
            default:"false"
        },
        AssignedTo:{
            type:String
        },
        tags:[{
            type:String
        }],
        Date:{
            type:Date
        }

    }
)
module.exports=mongoose.model("user",taskSchema)