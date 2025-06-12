import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(true);

  const baseURL = "https://jsonplaceholder.typicode.com/";
  const postsEndPoint = "posts"
  const commentsEndPoint = "comments"

  const fetchPostData = () => {
    fetch(baseURL + postsEndPoint).then(
      (response) => {
        return response.json();
      }).then((data) => {
        console.log("Final Posts Data : ", data);

        setPosts(data);
      }).catch((err) => {
        console.log("Error", err);
      });
  }

  const fecthCommentsData = async () => {

    const res = await fetch(baseURL + commentsEndPoint);

    const data = await res.json();

    console.log("Comment Data", data);
    setComments(data);

  }

  useEffect(() => {
    fetchPostData()
    fecthCommentsData();
  }, [])

  return <>
    <hr />

    <button onClick={() => setShow(true)}> Show Posts Data</button >
    <button style={{ marginLeft: '10px' }} onClick={() => setShow(false)}> Show Comments Data</button >

    <hr />

    {(show) ? <h1 style={{ textAlign: 'center' }}>Posts Data </h1> : <h1 style={{ textAlign: 'center' }}>Comment Data</h1>}


    {
      (show) ? posts.map((post, index) => {
        return <div key={index}>
          <h2>{post.id}</h2>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      }) : comments.map((comment, index) => {
        return <div key={index}>
          <p>ID : {comment.id}  | NAME : {comment.name}</p>
          <h6>EMAIL : {comment.email}</h6>
          <p>{comment.body}</p>
          <hr />
        </div>
      })
    }




  </>
}

/*
 JavaScript => fetch() => API called


 https://jsonplaceholder.typicode.com/posts

 Base URL  |  End Point

 https://jsonplaceholder.typicode.com/comments
*/

export default App;