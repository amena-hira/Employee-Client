import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './EmployeeForm.css';
import toast from 'react-hot-toast';

const EmployeeForm = ({ heading, setEmployees, setSmShow, editEmployee, setEditEmployee, setCount, page, size, setPage }) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const job_title = form.job_title.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const city = form.city.value;
        const state = form.state.value;
        const primary_contact = form.primary_contact.value;
        const primary_phone = form.primary_phone.value;
        const primary_relation = form.primary_relation.value;
        const secondary_contact = form.secondary_contact.value;
        const secondary_phone = form.secondary_phone.value;
        const secondary_relation = form.secondary_relation.value;
        const employeeData = {
            name, job_title, phone, email, address, city, state, primary_contact, primary_phone, primary_relation, secondary_contact, secondary_phone, secondary_relation
        }
        console.log(employeeData);
        console.log(page,size);
        if (heading === 'Add') {
            fetch(`https://employment-server-side.vercel.app/addEmployee?page=${0}&size=${size}`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(employeeData)
            })
                .then(res => res.json())
                .then(data => {
                    setSmShow(false);
                    toast.success(`${name} employee added successfully!!`);
                    console.log(data);
                    setEmployees(data.result);
                    setCount(data.count[0].total_count);
                    setPage(0);
                })
        }
        else {
            
            fetch(`https://employment-server-side.vercel.app/editEmployee/${editEmployee[0]?.id}?page=${page}&size=${size}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(employeeData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSmShow(false);
                    toast(`${editEmployee[0]?.name} change to ${name} employee edited successfully!!`, {
                        icon: '👏',
                    });
                    setEditEmployee('');
                    setEmployees(data.result);
                    setCount(data.count[0].total_count);
                })
        }
    }
    return (
        <div className=''>
            <Form className='container-sm' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Full Name</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.name} name="name" placeholder="Employee Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.job_title} name='job_title' placeholder="Job Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.phone} name='phone' aria-label="Phone NUmber" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.email} name='email' placeholder="Email" />
                </Form.Group>
                <div className='row row-cols-1 row-cols-md-3'>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.address} name='address' placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.city} name='city' placeholder="City" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="formBasicPassword">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.state} name='state' placeholder="State" />
                    </Form.Group>

                </div>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Primary Emergency Contact</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.primary_contact} name='primary_contact' placeholder="Primary Emergency Contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.primary_phone} name='primary_phone' aria-label="Phone Number" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.primary_relation} name='primary_relation' placeholder="Relationship" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Secondary Emergency Contact</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.secondary_contact} name='secondary_contact' placeholder="Secondary Emergency Contact" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group mb-3">
                        <button className="btn" id='flag-btn' type="button"><span className="fi fi-in" id="basic-addon1"></span></button>
                        <input type="tel" className="form-control number-field" placeholder="Phone Number" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.secondary_phone} name='secondary_phone' aria-label="Phone Number" aria-describedby="basic-addon1" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control type="text" defaultValue={heading === 'Add' ? '' : editEmployee[0]?.secondary_relation} name='secondary_relation' placeholder="Relationship" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default EmployeeForm;