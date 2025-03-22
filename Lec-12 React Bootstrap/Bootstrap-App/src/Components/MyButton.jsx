import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function MyButton() {
    const handleAlert = () => {
        alert("Hello BTN");
    }
    return (
        <div>
            <Container>
                <Button variant='outline-danger' onClick={handleAlert}>Click Me</Button>
            </Container>

        </div>
    );
}


