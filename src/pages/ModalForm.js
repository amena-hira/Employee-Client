import React from 'react';
import Modal from 'react-bootstrap/Modal';
import EmployeeForm from './EmployeeForm';

const ModalForm = ({ heading, id, smShow, setSmShow }) => {
    return (
        <div>
            <Modal
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        {heading}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmployeeForm></EmployeeForm>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalForm;