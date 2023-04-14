import React, { useEffect, useState } from 'react';
import EmployeeDataTable from './EmployeeDataTable';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import { AiOutlineUserAdd } from "react-icons/ai";

const Dashboard = () => {
    const [smShow, setSmShow] = useState(false);
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/getEmployee')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployees(data)
            })
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-end p-4'>
                <Button onClick={() => setSmShow(true)} variant="warning" className='d-flex items-center'>
                    <AiOutlineUserAdd className='me-1'></AiOutlineUserAdd>Add Employee
                </Button>
                <ModalForm smShow={smShow} setSmShow={setSmShow} heading={'Add Employee Form'} id={'addEmployee'} setEmployees={setEmployees}></ModalForm>
            </div>
            <div className='p-4'>
                <EmployeeDataTable employees={employees} setEmployees={setEmployees}></EmployeeDataTable>
            </div>
        </div>
    );
};

export default Dashboard;