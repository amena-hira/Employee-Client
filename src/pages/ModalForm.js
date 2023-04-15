import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EmployeeForm from './EmployeeForm';

const ModalForm = ({editEmployee, setEditEmployee, heading, id, smShow, setSmShow, setEmployees, setCount, page, size }) => {
    return (
        <div>
            <Modal
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton onClick={()=>setEditEmployee('')}>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        {heading} Employee Form
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmployeeForm page={page} size={size} setCount={setCount} heading={heading} editEmployee={editEmployee} setEmployees={setEmployees} setSmShow={setSmShow}></EmployeeForm>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalForm;