import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CreateAccountForm = () => {
    const [account, setAccount] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAccount(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addAccount(account)
    }

    const addAccount = () => {
        axios.post('http://localhost:4000/api/create-account', account)
            .then(response => {
                if (response.data === 'e-mail error') {
                    document.querySelector('.feedback').innerHTML = "E-mail is already in use!"
                    setAccount(values => ({ ...values, email: "", password: "" }))
                } else {
                    window.location = "/login"
                }
            })
    }

    return (
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="firstName" required={true} value={account.firstName || ""} onChange={handleChange} />
                <Form.Label>Last Initial:</Form.Label>
                <Form.Control className="my-2" type="text" name="lastName" required={true} value={account.lastName ? account.lastName[0] : ""} onChange={handleChange} />
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control className="my-2" type="number" name="age" required={true} value={account.age || ""} onChange={handleChange} />
                <Form.Label>Gender</Form.Label>
                <Form.Control className="my-2" as="select" name="gender" required={true} value={account.gender || ""} onChange={handleChange}>
                    <option value="">Select One...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonBinary">Non-Binary</option>
                </Form.Control>
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className="my-2" type="text" placeholder="(xxx)xxx-xxxx" name="phone" value={account.phone || ""} onChange={handleChange} />
                <Form.Text className="text-muted">Phone number is not required.</Form.Text>
                <hr />
                <Form.Label>When's your clean day?</Form.Label>
                <Form.Control className="my-2" type="date" name="cleanDay" value={account.cleanDay || ""} onChange={handleChange} />
                <Form.Text className="text-muted">Clean day is not required.</Form.Text>
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control className="my-2" type="email" name="email" required={true} value={account.email || ""} onChange={handleChange} />
                <Form.Label>Password:</Form.Label>
                <Form.Control className="my-2" type="password" name="password" required={true} value={account.password || ""} onChange={handleChange} />
            </Form.Group>
            <div className="block col-md-3"></div>
            <p id="alreadyMember">Already a member? <span><Link to="/login">Login Here</Link></span></p>
            <h2 className="feedback"></h2>
            <Button variant="primary" type="submit">Join</Button>
        </Form>
    )
}

export default CreateAccountForm