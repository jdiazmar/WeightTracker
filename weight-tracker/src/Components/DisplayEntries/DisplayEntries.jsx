import React from 'react';
import Table from 'react-bootstrap/Table';


const DisplayEntries = (props) => {
    return ( 
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
     );
}
 
export default DisplayEntries;