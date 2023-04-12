import React, { useState } from 'react';


const AddEntryForm = () => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Weight</label>
                <input type='number' value={weight} placeholder='Weight' onChange={(e) => setWeight(parseFloat(e.target.value))}/> 
            </div>
            <div>
                <label>Date</label>
                <input type='date' value={date} placeholder='Date' onChange={(e) => setDate(e.target.value)}/> 
            </div>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;