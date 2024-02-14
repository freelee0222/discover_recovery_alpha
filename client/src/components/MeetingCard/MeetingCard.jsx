import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import moment from 'moment'
import '../../styles/card.css'

const MeetingCard = ({ meeting }) => {
    const hourMin = meeting.time.split(':')

    return (
        <>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="cardTitle">{meeting.name}</Card.Title>
                    <Card.Subtitle className="cardSubtitle mb-2 text-muted">{meeting.type}</Card.Subtitle>
                    <hr />
                    <Card.Text className="cardTime"> {moment({hours: hourMin[0], minutes:hourMin[1]}).format('h:mm a')}</Card.Text>
                    <Card.Text className="cardDays">{meeting.days.join(', ')}.</Card.Text>
                    <Card.Text className="cardDescription">{meeting.description}</Card.Text>
                    <div className="block"></div>
                    <Card.Text className="cardLocation">{meeting.location}</Card.Text>
                    <hr/>
                    <Link to={`/edit-meeting/${meeting._id}`}><Button variant="secondary" className="edit">Edit this meeting</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default MeetingCard