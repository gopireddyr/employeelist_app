import axios from 'axios';



class employee_service{

    getEmployees(){
        const url='http://localhost:8080/Employeelist/employees';

        return axios.get(url);
    }  
    getEmployee(id){
        const url='http://localhost:8080/Employeelist/employee/'+id;

        return axios.get(url);
    }

    createEmp(employee){
        const url='http://localhost:8080/Employeelist/Addemp';
        return axios.post(url,employee);
    }  

    updateEmp(employee){
        const url='http://localhost:8080/Employeelist/updateEmp';
        return axios.put(url,employee);
    } 
    deleteEmp(id){
        const url='http://localhost:8080/Employeelist/deleteEmp/'+id;

        return axios.delete(url);
    }

}
export default new employee_service();