import React, { useEffect, useState } from 'react';
import EmployeeDataTable from './EmployeeDataTable';
import Button from 'react-bootstrap/Button';
import ModalForm from './ModalForm';
import { AiOutlineUserAdd } from "react-icons/ai";

const Dashboard = () => {
    const [smShow, setSmShow] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [editEmployee, setEditEmployee] = useState([]);

    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    const pages = Math.ceil(count / size);


    useEffect(() => {
        fetch(`http://localhost:5000/getEmployee?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEmployees(data.result);
                setCount(data.count[0].total_count);
            })
    }, [page, size]);

    return (
        <div>
            <div className='d-flex justify-content-end p-4'>
                <Button onClick={() => setSmShow(true)} variant="warning" className='d-flex align-items-center'>
                    <AiOutlineUserAdd className='me-1'></AiOutlineUserAdd>Add Employee
                </Button>
                <ModalForm
                    setPage={setPage}
                    page={page}
                    size={size}
                    setCount={setCount}
                    setEditEmployee={setEditEmployee}
                    smShow={smShow}
                    setSmShow={setSmShow}
                    heading={'Add'}
                    id={'addEmployee'}
                    setEmployees={setEmployees}
                ></ModalForm>
            </div>
            <div className='d-flex ms-4'>
                <nav aria-label="..." className='me-2'>
                    <ul className="pagination pagination-sm">
                        {
                            [...Array(pages).keys()].map(number => <li className={page === number ? 'page-item active' : 'page-item'}>
                                <button className="page-link" key={number} onClick={() => setPage(number)} >{number}</button>
                            </li>)
                        }
                    </ul>
                </nav>
                <div>
                    <select onChange={event => setSize(event.target.value)} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="3">3</option>
                        <option value="6" selected>6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <div className='p-4'>
                <EmployeeDataTable
                    page={page}
                    size={size}
                    setCount={setCount}
                    editEmployee={editEmployee}
                    employees={employees}
                    setEditEmployee={setEditEmployee}
                    setEmployees={setEmployees}
                ></EmployeeDataTable>
            </div>

        </div>
    );
};

export default Dashboard;