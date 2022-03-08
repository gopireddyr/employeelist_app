import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import employee_service from './employee_service';


function UpdateEmp(props) {

    const navigate=useNavigate();

    const [data,setData]=useState({
        id:'',
        fname:"",
        lname:"",
        emailid:""
    });

    const updateEmp=(e)=> {
        e.preventDefault();
        if(data.id==='')
        {
            alert("Id should not be null");
        }
        else if(data.fname==='')
        {
            alert("First Name should not be null");
        }
        else if(data.lname==='')
        {
            alert("Last Name should not be null");
        }
        else if(data.emailid==='')
        {
            alert("Email Id should not be null");
        }
        else{

            let employee={id:data.id,empFirstName:data.fname,empLastName:data.lname,empEmailID:data.emailid}
       
            var res=employee_service.createEmp(employee)
            // console.log(alert('gopi'));
            if(res)
            {
                alert('Successfully created record');
                navigate('/home')

            }
            else
            {
                console.log(alert('Failed to create record'+res));
            }
        }

   
}


    const onchange =e=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    return (
        <div>
                <form>
                    <div className='cart'>
                    <center>This is Add Employees Page</center>
                    <div className="form-group">
                        <label>Emloyee Id</label>
                        <input type="Number" name='id' className="form-control" onChange={onchange} id="id" placeholder="Employee Id.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee First Name</label>
                        <input type="Text" className="form-control" name='fname' id="fname" onChange={onchange} placeholder="First Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Last Name</label>
                        <input type="Text" className="form-control" id="lname" name='lname' onChange={onchange} placeholder="Last Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Email</label>
                        <input type="Email" className="form-control" id="email" name='emailid' onChange={onchange}  placeholder="Email.."/>
                    </div>
                    <div className='buttons'>
                        <button type="Submit" className="btn btn-primary" id='submitbtn' onClick={updateEmp}>Update</button>
                        <Link to={'/'}> <button type="cancel" className="btn btn-danger" id='cancelbtn'>Cancel</button></Link> 
                    </div>
                    </div>
                </form>
            </div>
    );
}

export default UpdateEmp;