import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EmployeeForm.css';

const EmployeeForm = () => {
    return (
        <div className=''>
            <Form className='container-sm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Employee Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" name='job_title' placeholder="Job Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" name='phone' aria-label="Phone NUmber" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Email" />
                </Form.Group>
                <div className='row row-cols-1 row-cols-md-3'>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" name='address' placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Email" />
                    </Form.Group>

                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Primary Emergency Contact</Form.Label>
                    <Form.Control type="text" name='primary_contact' placeholder="Primary Emergency Contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" name='primary_phone' aria-label="Phone Number" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control type="text" name='primary_relation' placeholder="Relationship" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Secondary Emergency Contact</Form.Label>
                    <Form.Control type="text" name='secondary_contact' placeholder="Secondary Emergency Contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" name='secondary_phone' aria-label="Phone Number" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control type="text" name='secondary_relation' placeholder="Relationship" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default EmployeeForm;