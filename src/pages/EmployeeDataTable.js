import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalForm from './ModalForm';

const EmployeeDataTable = ({ employees }) => {
    console.log("employees: ", typeof employees, employees);
    const [lgShow, setLgShow] = useState(false);
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
                        employees.map((emp,index)=>
                            <tr>
                                <td>{index+1}</td>
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
                                        <Button variant='outline-success' className="btn me-1" onClick={() => setLgShow(true)}><FaUserEdit></FaUserEdit></Button>
                                        <Button className='add-btn' variant="danger">
                                            <MdDelete></MdDelete>
                                        </Button>
                                    </div>
                                </td>
                            </tr>)
                    }

                </tbody>
            </Table>
            <ModalForm smShow={lgShow} setSmShow={setLgShow} heading={'Edit Employee Form'} id={'addEmployee'} ></ModalForm>
        </div>
    );
};

export default EmployeeDataTable;