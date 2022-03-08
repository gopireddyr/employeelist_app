import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import employee_service from '../employee_service';
class AddEmpForm extends Component {
    
    constructor(props)
    {
        
        super(props)
        this.state={
           
            id:"",
            fname:"",
            lname:"",
            emailid:""
        }
    } 
    
        insertEmp=(e)=> {
           

        e.preventDefault();
        let employee={id:this.state.id,empFirstName:this.state.fname,empLastName:this.state.lname,empEmailID:this.state.emailid}
        
            employee_service.createEmp(employee).then(res=>{
                console.log(alert('gopi'));
            })
       
    }

    onchangefname=(event)=>{
        this.setState({
            fname:event.target.value
        });
    }
    onchangelname=(event)=>{
        this.setState({
            lname:event.target.value
        });
    }
    onchangeid=(event)=>{
        this.setState({
            id:event.target.value
        });
    }
    onchangeemailid=(event)=>{
        this.setState({
            emailid:event.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                <div className='cart'>
                    <div className="form-group">
                        <label>Emloyee Id</label>
                        <input type="Number" className="form-control" onChange={this.onchangeid} id="Emloyee Id" placeholder="Employee Id.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee First Name</label>
                        <input type="Text" className="form-control" id="fName" onChange={this.onchangefname} placeholder="First Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Last Name</label>
                        <input type="Text" className="form-control" id="lName" onChange={this.onchangelname} placeholder="Last Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Email</label>
                        <input type="Email" className="form-control" id="lName" onChange={this.onchangeemailid}  placeholder="Email.."/>
                    </div>
                    <div className='buttons'>
                           <button type="Submit" className="btn btn-primary" id='submitbtn' onClick={this.insertEmp}>Submit</button>
                       <Link to={'/'}> <button type="cancel" className="btn btn-danger" id='cancelbtn'>Cancel</button></Link> 
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddEmpForm;