import React from 'react'

export default function TodoItems({ title, date }) {

    console.log(title);

    return <>

        {/* {(props.title && props.date) ? <div className="row my-row">
            <div className="col-6">{props.title}</div>
            <div className="col-4">{props.date}</div>
            <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
        </div> : ""
        } */}

        {(title && date) ? <div className="row my-row">
            <div className="col-6">{title}</div>
            <div className="col-4">{date}</div>
            <div className="col-2"><button type="button" className="btn btn-danger my-btn">Delete</button></div>
        </div> : ""
        }
    </>
}
