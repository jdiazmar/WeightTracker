import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return ( 
        <Container fluid>
                <Form onSubmit={handleSubmit}>
                <Row xs='auto'>
                    <Col >
                        <Form.Group>
                            <Form.Label>Weight</Form.Label>
                            <input type='number' value={weight} placeholder='Weight' onChange={(e) => setWeight(parseFloat(e.target.value))}/> 
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <input type='date' value={date} placeholder='Date' onChange={(e) => setDate(e.target.value)}/> 
                        </Form.Group>
                    </Col>
                    <Col >
                        <Button variant='primary' type='submit' >Add</Button>
                    </Col>
                    </Row>
                
            </Form>
            
        
        </Container>
     );
}
 
export default AddEntryForm;