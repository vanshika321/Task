import React, {useState} from 'react';
import {Button,Modal}  from 'react-bootstrap';
import "./../clientsStyles.css"
import "./../styles.css"
import axios from 'axios';

const Archived= props =>{
  const task=props.client
    console.log("task is",task)
    const [data,setData]=useState({
        title:task.title,
        taskDescription:task.taskDescription,
        AssignedTo:task.AssignedTo,
            Date:task.Date,

            
    })
    console.log("taskkois",task.taskDescription)
    const[ showClient,setShowClient]=useState(false)

    const handleFormChange=(e)=>{
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        // console.log(data)
      }

     const  handleModalClient=()=>{
        setShowClient(!showClient)
       
      } 

     const  handleEditClient=(e)=>{
        // e.preventDefault()
        
        axios
        .put(`http://localhost:3000/api/v1/tasks/${task._id}`,data)
        .then(response=>{
          console.log(response)
        })
        .catch(err=>console.log("error is",err))
    }
    const colors = [
      {
          primaryColor : "#5D93E1",
          secondaryColor : "#ECF3FC"
      },
      {
          primaryColor : "#F9D288",
          secondaryColor : "#FEFAF1"
      },
      {
          primaryColor : "#5DC250",
          secondaryColor : "#F2FAF1"
      },
      {
          primaryColor : "#F48687",
          secondaryColor : "#FDF1F1"
      },
      {
          primaryColor : "#B964F7",
          secondaryColor : "#F3F0FD"
      }
  ]

    
    return (
      //   <div>
      //   <tr>
       
      // <td  onClick={handleModalClient}>
      //   {data.title}
      
      //   </td>
      //   </tr>
      //   <tc>
      //     <td>
      //       {data.description}
      //     </td>
      //   </tc>
      <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[2%5].primaryColor}}></div>
            <div class = "task-holder" onClick={handleModalClient}>
                <span class = "card-header" style={{"background-color": colors[2%5].secondaryColor, "border-radius": "10px"}}> {data.title}</span>
                <p className = "mt-3" >Description:{data.taskDescription}</p>
                <p className = "mt-3" >Assignee:{data.AssignedTo}</p>
                <p className = "mt-3" >Due date:{data.date}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    {/* <i class = "far fa-edit mr-3" style={{"color" : colors[2%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[2%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i> */}
                </div>
        </div>
        <Modal show={showClient} >
  <Modal.Header>Edit Task</Modal.Header>
    <form onSubmit={handleEditClient} action="/clients">
  <Modal.Body>
      
      <label>Title</label>
      <br />
      <input onChange={(e)=>handleFormChange(e)} value={data.title} id="title" type="text" />
      <br />
      <label>Description</label>
      <br />
      <input onChange={(e)=>handleFormChange(e)} id ="taskDescription" value={data.taskDescription} type="text" className="address"/>
      <br />
      <label>Due Date</label>
      <br />
      <input onChange={(e)=>handleFormChange(e)}  id="date" value={data.date} type="date" />
      <br />
      <label>Assignee</label>
      <br />
      <input onChange={(e)=>handleFormChange(e)} id="AssignedTo" value={data.assignee} type="text" />
      
  </Modal.Body>
  <Modal.Footer>
  <Button onClick={handleModalClient}>Close</Button>
  <Button type="submit">Edit</Button>
  </Modal.Footer>
    </form>

</Modal>
    
    </div>
    )
}
export default Archived;