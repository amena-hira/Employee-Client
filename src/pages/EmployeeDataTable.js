import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalForm from './ModalForm';

const EmployeeDataTable = ({ handleShow, show, handleClose }) => {
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
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <div className='d-flex'>
                                <Button variant='outline-success' className="btn me-1" onClick={() => setLgShow(true)}><FaUserEdit></FaUserEdit></Button>
                                <Button className='add-btn' variant="danger" onClick={handleShow}>
                                    <MdDelete></MdDelete>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <div className='d-flex'>
                                <Button variant='outline-success' className="btn me-1" onClick={() => setLgShow(true)}><FaUserEdit></FaUserEdit></Button>
                                <Button className='add-btn' variant="danger" onClick={handleShow}>
                                    <MdDelete></MdDelete>
                                </Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>
                            <div className='d-flex'>
                                <Button variant='outline-success' className="btn me-1" onClick={() => setLgShow(true)}><FaUserEdit></FaUserEdit></Button>
                                <Button className='add-btn' variant="danger" onClick={handleShow}>
                                    <MdDelete></MdDelete>
                                </Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <ModalForm smShow={lgShow} setSmShow={setLgShow} heading={'Edit Employee Form'} id={'addEmployee'} ></ModalForm>
        </div>
    );
};

export default EmployeeDataTable;