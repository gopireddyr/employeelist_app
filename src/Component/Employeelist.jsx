import React, { Component } from 'react';
import employee_service from './employee_service';
import {Link} from 'react-router-dom';
import "../App.css";

class Employeelist extends Component {
constructor(props)
{
super(props)

this.state={
    employee : []
}

this.deleteRec = this.deleteRec.bind(this);
        
}

deleteRec(id){
   var res= employee_service.deleteEmp(id)
   if(res)
   {
        alert('Employee record deleted successfully');
        window.location.reload();
   }
}

componentDidMount()
{
    employee_service.getEmployees().then(Response=>
        {
            this.setState({employee : Response.data})
        })
}


    render() {
        return (
            <div className='card bg-light text-dark'>
                <div>
                    <></>
                    <Link to={'/AddEmployee/-1'}>
                    <button type='Button' className="btn btn-primary" id="AddEmp-button">Add Employee</button>
                    </Link>
                </div>
                
                <div  className="card">
                    <div className='card-body' >
                    <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                        <th>Emp Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        </tr>
                        </thead>
                       <tbody>
                           {
                               this.state.employee.map(
                                    employee=>
                                    <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.empFirstName}</td>
                                    <td>{employee.empLastName}</td>
                                    <td>{employee.empEmailID}</td>
                                    <td> 
                                       <Link to={`/AddEmployee/${employee.id}` }> <button type='Button' id='updatebtn' className="btn btn-primary">Updatee</button></Link>
                                       <button type='Button' id='deletebtn' className="btn btn-danger" onClick={()=>this.deleteRec(employee.id)}>Delete</button>
                                       <Link to={`/View/${employee.id}` }> <button type='Button' id='viewbtn' className="btn btn-primary">View</button></Link>
                                      
                                    </td>
                                    </tr>
                               )
                           
                           }
                        
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Employeelist;