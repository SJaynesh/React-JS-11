import React from 'react'

export default function App() {
  let fruits = ["Apple", "Mango", "Banana", "Kiwi"]
  let users = [
    {
      name: "Rahul",
      age: 20,
      course: "Full Stack"
    },
    {
      name: "Aman",
      age: 19,
      course: "UI/UX"
    },
    {
      name: "Karan",
      age: 22,
      course: "Flutter"
    },
    {
      name: "Rajavi",
      age: 19,
      course: "Full Stack"
    }
  ];
  return (
    <div>
      <center>
        <h1>List</h1>
      </center>

      <ul>
        {fruits.map((val, index) => (
          <li>{val}</li>
        ))}
      </ul>

      <center>
        <h1>Users</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.course}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  )
}
