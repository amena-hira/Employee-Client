import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalForm from './ModalForm';
import toast from 'react-hot-toast';

const EmployeeDataTable = ({ employees, editEmployee, setEditEmployee, setEmployees, setCount, page, size }) => {
    const [lgShow, setLgShow] = useState(false);
    const handleEmployeeEdit = (emp) => {
        fetch(`https://employment-server-side.vercel.app/getEmployee/${emp.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEditEmployee(data);
            })
    }

    const handleEmployeeDelete = (emp) => {
        console.log(emp);
        fetch(`https://employment-server-side.vercel.app/deleteEmployee/${emp.id}?page=${page}&size=${size}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.error(`${emp.name} employee delete successfully!!!`)
                setEmployees(data.result);
                setCount(data.count[0].total_count);
            })
    }
    const handleModalAndData = (emp) => {
        handleEmployeeEdit(emp);
        setLgShow(true);

    }
    return (
        <div>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Employee Full Name</th>
                        <th>Job Title</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Primary Emergency Contact</th>
                        <th>Phone NUmber</th>
                        <th>Relationship</th>
                        <th>Secondary Emergency Contact</th>
                        <th>Phone NUmber</th>
                        <th>Relationship</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees ?
                            employees.map((emp, index) =>
                                <tr key={index}>
                                    <td>{page > 0 ? (page * size) + (index + 1) : index + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.job_title}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.address}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.state}</td>
                                    <td>{emp.primary_contact}</td>
                                    <td>{emp.primary_phone}</td>
                                    <td>{emp.primary_relation}</td>
                                    <td>{emp.secondary_contact}</td>
                                    <td>{emp.secondary_phone}</td>
                                    <td>{emp.secondary_relation}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <Button variant='outline-success' className="btn me-1" onClick={() => handleModalAndData(emp)}><FaUserEdit></FaUserEdit></Button>
                                            <Button onClick={() => handleEmployeeDelete(emp)} className='add-btn' variant="danger">
                                                <MdDelete></MdDelete>
                                            </Button>
                                        </div>
                                    </td>
                                </tr>)
                            :
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                </td>
                            </tr>
                    }

                </tbody>
            </Table>
            {employees?
            "":<h5 className='text-center text-warning'>Please Add Data or Connect to Database!!!</h5>
            }
            <ModalForm
                page={page}
                size={size}
                setCount={setCount}
                setEditEmployee={setEditEmployee}
                editEmployee={editEmployee}
                smShow={lgShow}
                setSmShow={setLgShow}
                heading={'Edit'}
                id={'addEmployee'}
                setEmployees={setEmployees}
            ></ModalForm>
        </div>
    );
};

export default EmployeeDataTable;