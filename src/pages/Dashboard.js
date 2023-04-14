import React, { useState } from 'react';
import EmployeeDataTable from './EmployeeDataTable';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import { AiOutlineUserAdd } from "react-icons/ai";

const Dashboard = () => {
    const [smShow, setSmShow] = useState(false);
    return (
        <div>
            <div className='d-flex justify-content-end p-4'>
                <Button onClick={() => setSmShow(true)} variant="warning" className='d-flex items-center'>
                    <AiOutlineUserAdd className='me-1'></AiOutlineUserAdd>Add Employee
                </Button>
                <ModalForm smShow={smShow} setSmShow={setSmShow} heading={'Add Employee Form'} id={'addEmployee'} ></ModalForm>
            </div>
            <div className='p-4'>
                <EmployeeDataTable></EmployeeDataTable>
            </div>
        </div>
    );
};

export default Dashboard;