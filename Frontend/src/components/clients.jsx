import React, { Component } from 'react';
import "./../clientsStyles.css"
import "./../styles.css"
import {Button,Modal}  from 'react-bootstrap';
import axios from 'axios';
import Client from './client';
import { useHistory } from "react-router-dom";
// import { Select } from '@mobiscroll/react-lite';
// import { components } from "react-select";
// import Pagination from './pagination';

class Clients extends React.Component {
    constructor() {
        super();
        // this.handleEditClient = this.handleEditClient.bind(this);
        this.state = {
          tasks:[],
          show:false,
          showClient:false,
          pageSize:2,
          currentPage:1,
          navbar:"navbar",
          searchFilter:"",
          data:{
            title:"",
            taskDescription:"",
            AssignedTo:"",
            Date: null,
            tags:[],
            archived:false
          },
          
          
        };
      }

      componentDidMount() {
        axios.get("http://localhost:3000/api/v1/tasks")
          .then(res =>{
            const tasks = res.data.User;
            this.setState({ tasks})
            console.log("tasks",tasks)
          }
        )
        }
       
      
        handleDarkMode=()=>{
          if(this.state.mode==="body"){
            this.setState({mode:"body active"})
            this.setState({moon:"fa fa-sun-o"})
        
          }
          else{
            this.setState({mode:"body"})
            this.setState({moon:"fa fa-moon-o"})
          }
        }


     handleModal=()=>{
       this.setState({show:!this.state.show})
      
     } 
     handleModalClient=()=>{
      this.setState({showClient:!this.state.showClient})
     
    } 
    handleCreateTask=(e)=>{
      // e.preventDefault()
      console.log("test",this.state.data)
      axios
      .post("http://localhost:3000/api/v1/tasks",this.state.data)
      .then(response=>{
        console.log(response)
      })
      .catch(err=>console.log("error is",err))
 } 
 handleFormChange=(e)=>{
  
   const newData={...this.state.data}
   newData[e.target.id]=e.target.value
   this.setState({data:newData})
   console.log("data is",this.state.data)
   
 }
 

    render() { 
      
      // const modalInput=Pagination(this.state.pageSize,this.state.currentPage)
        return( 
          <div>

<div className = "header text-center">
                <h3>Task Manager</h3>
                <button className = "btn btn-primary mt-2" onClick = {this.handleModal} >Create Task</button>
                <a href='/archived'>
                <button className = "btn btn-primary mt-2 ar">Archived</button>
                </a>
            </div>
             <div className="">
  <div className = "task-container">
    
     {this.state.tasks.filter(e=>e.archived.includes("false")).map(e=>(
      // <tr>
      
      // {/* <td  onClick={this.handleModalClient}> */}
      //   <td>
      //   {e.Name}
      //   </td>
      //   </tr>
      <Client client={e}/>
      
     ))}
     </div>
  


<Button onClick={this.handleModal}>Create User</Button>
<Modal show={this.state.show} >
  <Modal.Header>Tasks</Modal.Header>
    <form onSubmit={this.handleCreateTask}>
  <Modal.Body>
  
      <label>Title</label>
      <br />
      <input onChange={(e)=>this.handleFormChange(e)} value={this.state.data.title} id="title" type="text" />
      <br />
      <label>Description</label>
      <br />
      <input onChange={(e)=>this.handleFormChange(e)} id ="taskDescription" value={this.state.data.taskDescription} type="text" className="address"/>
      <br />
      <label>Due Date</label>
      <br />
      <input onChange={(e)=>this.handleFormChange(e)}  id="date" value={this.state.data.Date} type="date" />
      <br />
      <label>Assignee</label>
      <br />
      <input onChange={(e)=>this.handleFormChange(e)} id="AssignedTo" value={this.state.data.AssignedTo} type="text" />
      
      {/* <Select
    data={this.state.data.tags}
    selectMultiple={true}
    touchUi={false}
/> */}
      <br />
      <p>Archived:</p>
      <div onChange={this.onChangeValue}>
  <input type="radio" id="archived"  onChange={(e)=>this.handleFormChange(e)} value="true"/>
  <label for="archived" >true</label>
  <input type="radio" id="archived"value="false" onChange={(e)=>this.handleFormChange(e)}/>
  <label for="archived">false</label> 
  </div>
  </Modal.Body>
  <Modal.Footer>
  <Button onClick={this.handleModal}>Close</Button>
  <Button type="submit">Create</Button>
  </Modal.Footer>
    </form>

</Modal>


</div>
</div>
        
        )
    }
}
 
export default Clients;