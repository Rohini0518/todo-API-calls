import "./App.css";
import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [postFeeds, setPostFeeds] = useState([]);
  const [post, setPost] = useState("");
  const fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    let data = await response.json();
    console.log(data);
    setPostFeeds(data.slice(0, 8));
  };

  const addposts = async () => {
    let newPost = { title: post };
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    // let data = await response.json();

    setPostFeeds([...postFeeds, newPost]);
  };
  //put method

  const updatepost = async (id) => {
    let updatepost = { title: post };
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatepost),
      }
    );
    let data = await response.json();
    let updatedPosts = [...postFeeds];
    let index = updatedPosts.findIndex((post) => post.id === id);
    updatedPosts[index].title = post;
    setPostFeeds(updatedPosts);
  };

  //delete method

  const deletepost = async (id) => {
  
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    let updatedPosts = [...postFeeds];
    let index = updatedPosts.findIndex((post) => post.id === id);
    updatedPosts.splice(index, 1);
    setPostFeeds(updatedPosts);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div>
      <h1>API methods</h1>
      <Button onClick={fetchPosts} action="Fetch Data" />
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Button onClick={addposts} action="Add Post" />
      {postFeeds.map((post, index) => (
        <p key={index}>
          {post.title}{" "}
          <Button onClick={() => updatepost(post.id)} action="Update" />
            
          <Button onClick={() => deletepost(post.id)} action="Delete" />

        </p>
      ))}

    </div>
  );
}

export default App;
