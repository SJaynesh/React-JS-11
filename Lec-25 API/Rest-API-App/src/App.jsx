import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPostData = () => {
    const postsAPI = "https://jsonplaceholder.typicode.com/posts";

    fetch(postsAPI).then(
      (response) => {
        return response.json();
      }).then((data) => {
        console.log("Final Posts Data : ", data);

        setPosts(data);
      }).catch((err) => {
        console.log("Error", err);
      });
  }



  useEffect(() => {
    fetchPostData()
  }, [])

  return <>
    <h1 style={{ textAlign: 'center' }}>API Called</h1>

    <button onClick={fetchPostData}>Fetch Posts Data</button>

    <hr />

    {
      posts.map((post, index) => {
        return <div key={index}>
          <h2>{post.id}</h2>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      })
    }

    
  </>
}

/*
 JavaScript => fetch() => API called
*/

export default App;