// This Page is tagged for future development
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function LoginForm() {
    const [inputs, setInputs] = useState({})

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        setInputs({})
    }

    return (
        <>
        <hr/>
        <h1><u>This page is intended for future development</u></h1>
        <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="test" type="email" placeholder="Enter email" name="email" value={inputs.email || ""} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={inputs.password || ""} onChange={handleChange} required />
                </Form.Group>
                <h2 className="feedback"></h2>
                <Button variant="primary" type="submit" className="m-3">Log In</Button>
            </Form>
        </>
    )
}

export default LoginForm