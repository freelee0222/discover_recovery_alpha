import React from 'react'
import {  Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './meeting-btn.css'

const MeetingBtn = () => {
    return (
        <Link to="next-meeting"><Button variant="primary" className="meetingBtn">Next Meeting</Button></Link>
    )
}

export default MeetingBtn