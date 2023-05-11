import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


const DisplayEntries = (props) => {
    return ( 
        <Container fluid>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Entry Number</th>
                        <th>Weight</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentEntries.map((entry, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.weight}</td>
                                <td>{entry.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
     );
}
 
export default DisplayEntries;