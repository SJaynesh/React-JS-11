import React, { useState } from 'react'
import { Alert, Button, Container, Card, Carousel } from 'react-bootstrap'

export default function MyAlert() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Container className='mt-4'>
                <Alert show={show} variant='success' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>⚠Alert⚠</Alert.Heading>
                    <p>This is a Alert Dialog box</p>

                    <hr />

                    <p>Deloperd by Jaynesh Sarkar</p>
                </Alert>

                {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            </Container>

            <Container className='mt-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/670026216/photo/sunset-over-the-fishing-pier-at-the-lake-in-finland.jpg?s=612x612&w=0&k=20&c=sElk_hY51iO7yxd2SRGsOBJWWAhDLQfF3_V4gNLGd20=" />
                    <Card.Body>
                        <Card.Title>Natural View</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Carousel>
                <Carousel.Item interval={1000}>
                    <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" width={2000} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" width={2000} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}
