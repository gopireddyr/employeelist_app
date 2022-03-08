import React, { useState } from 'react';
import {Link,useParams} from 'react-router-dom';
import employee_service from './employee_service';

function EmployeeDetails(props) {

    const empid =useParams().id;
    const [employee,setEmp]=useState({id:'',empFirstName:'',empLastName:'',empEmailID:''})
        
        employee_service.getEmployee(empid).then(Response=>
            {
                setEmp(Response.data)
            });    
    

    return (
        <div>
            <div>
                                <div key={employee.id}>
                                <div>{employee.id}</div>
                                <div>{employee.empFirstName}</div>
                                <div>{employee.empLastName}</div>
                                <div>{employee.empEmailID}</div>
                                <Link to={'/'}> <button type="cancel" className="btn btn-primary" id='cancelbtn'>Cancel</button></Link> 
                                </div>
           </div>
        </div>
    );
}

export default EmployeeDetails;