import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    hobby: ["Reading", "Coding"]
  });

  const handlarChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
      })
  }

  const handlarSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

  }

  return (
    <div className='container col-4 my-4'>
      <h1>Form</h1>

      <form onSubmit={handlarSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" name='userName' className="form-control" value={formData.userName} onChange={handlarChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name='email' className="form-control" value={formData.email} onChange={handlarChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name='password' className="form-control" value={formData.password} onChange={handlarChange} />
        </div>

        {
          formData.hobby.map((e) => {
            return <div>
              <input type="checkbox" value={e} name={e} />{e}
            </div>
          })
        }

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
