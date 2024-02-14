import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import moment from 'moment'
import '../../styles/card.css'

const ActivityCard = ({ activity }) => {
    const hourMin = activity.time.split(':')

    return (
        <>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="cardTitle">{activity.name}</Card.Title>
                    <hr />
                    <Card.Text className="cardDate"> {moment(activity.date).format("MMMM Do")}</Card.Text>
                    <Card.Text className="cardTime"> {moment({hours: hourMin[0], minutes:hourMin[1]}).format('h:mm a')}</Card.Text>
                    <Card.Text className="cardDescription">{activity.description}</Card.Text>
                    <div className="block"></div>
                    <Card.Text className="cardLocation">{activity.location}</Card.Text>
                    <hr/>
                    <Link to={`/edit-activity/${activity._id}`}><Button variant="secondary" className="edit">Edit this activity</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ActivityCard