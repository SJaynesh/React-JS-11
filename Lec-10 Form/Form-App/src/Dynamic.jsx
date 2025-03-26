import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Dynamic() {
    const [fields, setFields] = useState([{ id: Math.random(), text: "" }])

    const handleAdd = () => {
        fields.push({ id: Math.random(), text: "" });

        setFields([...fields])
    }

    const handleDelete = (id) => {
        // event.preventDefeult();
        setFields(fields.filter((data) => data.id != id));
    }

    const handleChange = (event, id) => {
        setFields(fields.map((e) => {
            if (e.id == id) return { ...e, text: event.target.value }
            else return e;
        }))
    }


    return (
        <div className='container col-4'>
            <h2>Dynamic Form</h2>
            {
                fields.map((record) => {
                    return <div className='mb-2 d-flex gap-2' key={record.id}>
                        <input type="hidden" value={record.id} />
                        <input type='text' name='userName' className='form-control' placeholder='Enter any here' value={record.text} onChange={(event) => handleChange(event, record.id)} />
                        <button className='btn btn-danger' onClick={(event) => handleDelete(record.id, event)}>❌</button>
                    </div>
                })
            }

            <button className='btn btn-success my-4' onClick={handleAdd}>Add ➕</button>
        </div>
    )
}
