const taskController=require("../controllers/taskController")
const express=require("express")
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router=express.Router();
router.
route('/')
.get(taskController.getAllUsers)
.post(urlencodedParser,taskController.registerTask)
router.
route('/:id')
// .get(taskController.getOneUser)
.put(taskController.updateTask)




module.exports=router;


