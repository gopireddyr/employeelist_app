import React, { useState } from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import employee_service from './employee_service';


function Addemployees(props) {


    const navigate=useNavigate();
    // const [empid,setempid]=useState({
    //     id:query.id
    // });
    let empid=useParams().id;
    var [data,setData]=useState({
        id:'',
        fname:"",
        lname:"",
        emailid:""
    });
    
    const [employeelist,setEmplist]=useState({});

    if(empid!=='-1'){ 
        
        employee_service.getEmployee(empid).then(Response=>setEmplist(Response.data));
     }

    const onchange =e=>{
            setData({...data,[e.target.name]:e.target.value});
    }

    // const { id,fname,lname,emailid}={...data}
    

//    const componentDidMount=()=>
//     {
//        if(props.id!==-1){ 
//            employee_service.getEmployee(props.id).then(Response=>setEmplist(Response.data))
//         }
//     }

         const insertEmp=(e)=> {
                e.preventDefault();
            if(empid==='-1')
            {
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
                                console.log(employee)
                                var res=employee_service.createEmp(employee)
                                // console.log(alert('gopi'));
                                if(res)
                                {
                                    alert('Successfully created record');
                                    navigate('/')
                                }
                                else
                                {
                                    console.log(alert('Failed to create record'+res));
                                }
                            }
             }
             else{
                        if(data.fname==='' && data.lname==='' && data.emailid==='')
                        {
                            alert("Update atleast one field");
                        }
                        else{
                             let employee={id:employeelist.id,empFirstName:'',empLastName:'',empEmailID:''}
                                if(data.fname!=='')
                                {
                                   employee.empFirstName=data.fname;
                                }
                                else{
                                    employee.empFirstName=employeelist.empFirstName;
                                }
                                if(data.lname!=='')
                                {
                                   employee.empLastName=data.lname;
                                }
                                else{
                                    employee.empLastName=employeelist.empLastName;
                                }
                                if(data.emailid!=='')
                                {
                                   employee.empEmailID=data.emailid;
                                }
                                else{
                                    employee.empEmailID=employeelist.empEmailID;
                                }
                                res=employee_service.updateEmp(employee)
                                if(res)
                                {
                                    alert('Successfully updated record');
                                    navigate('/')
                
                                }
                                else
                                {
                                    console.log(alert('Failed to create record'+res));
                                }
                                }
                    
                    //  let employee={id:employeelist.id,empFirstName:data.fname,empLastName:data.lname,empEmailID:data.emailid}
                    //       res=employee_service.update(employee)
                        
                    } 
    }
    // e => this.onTodoChange(e.target.value)
    return (
        <div>
                <form>
                    <div className='cart'>
                    <center>This is Add Employees Page</center>
                    <div className="form-group">
                        <label>Emloyee Id</label>
                        <input type="Number" name='id' value={employeelist.id} className="form-control" onChange={onchange} id="id" placeholder="Employee Id.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee First Name</label>
                        <input type="Text" className="form-control" name='fname' defaultValue={employeelist.empFirstName} id="fname" onChange={onchange} placeholder="First Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Last Name</label>
                        <input type="Text" className="form-control" id="lname" defaultValue={employeelist.empLastName} name='lname' onChange={onchange} placeholder="Last Name.."/>
                    </div>
                    <div className="form-group">
                        <label>Emloyee Email</label>
                        <input type="Email" className="form-control" id="email" defaultValue={employeelist.empEmailID} name='emailid' onChange={onchange}  placeholder="Email.."/>
                    </div>
                    <div className='buttons'>
                        <button type="Submit" className="btn btn-primary" id='submitbtn' onClick={insertEmp}>Submit</button>
                        <Link to={'/'}> <button type="cancel" className="btn btn-danger" id='cancelbtn'>Cancel</button></Link> 
                    </div>
                    </div>
                </form>
            </div>
    );
}

export default Addemployees;