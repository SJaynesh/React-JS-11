import React, { use, useEffect, useState } from 'react'

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [users, setUsers] = useState([]);

  useEffect(() => {
    let records = localStorage.getItem('users');

    // To Convert String To JSON
    // const data = '[{"name" : "Jaynesh", "age" : 20}]';
    // console.log(JSON.parse(data));

    console.log(records);


    setUsers(JSON.parse(records));

  }, []);

  useEffect(() => {

    console.log("-------------------------");
    console.log(users);
    console.log("-------------------------");

    // To Convert Object To String
    console.log(JSON.stringify(users));


    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }

  }, [users])


  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, { email, password }]);

    setEmail("");
    setPassword("");
  }

  const handleDelete = (index) => {
    const deleteUser = users.filter((record, i) => i != index);

    setUsers(deleteUser);
  }

  const handleEdit = (index) => {
    setEmail(users[index].email);
    setPassword(users[index].password);
  }

  return (
    <div>
      <h1 align='center'>CRUD Operation</h1>

      <form onSubmit={handleSubmit}>
        <table align='center' border={1}>

          <tr>
            <td>Email</td>
            <td> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email..' /></td>
          </tr>

          <tr>
            <td>Password</td>
            <td> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password..' /></td>
          </tr>

          <tr>
            <td></td>
            <td> <button>Submit</button> </td>
          </tr>
        </table>
      </form>


      <br /><br />

      <table align='center' border={1}>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>

        {
          users.map((record, index) =>
            <tr key={index}>
              <td>{record.email}</td>
              <td>{record.password}</td>
              <td>
                <button onClick={() => handleEdit(index)} style={{ backgroundColor: 'green', color: 'white', margin: 5, borderRadius: 5, }}>Edit</button>
                <button onClick={() => handleDelete(index)} style={{ backgroundColor: 'red', color: 'white', margin: 5, borderRadius: 5, }}>Delete</button>
              </td>
            </tr>)
        }
      </table>
    </div >
  )
}
