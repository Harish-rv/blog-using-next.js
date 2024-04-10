"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts,setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err,setError] = useState();

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const posts = await fetch('https://dev.to/api/articles');
        if(!posts.ok){
          throw new Error('Network response was not ok');
        }
        const result = await posts.json();
        
        setPosts(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  },[]);

  if(loading){
    return <div className="common">Loading...</div>;
  }

  if(err){
    return <div className="common">Error: {err}</div>;
  }

  return (
    <>
      <div className="row post-box">
        <h3 className="mb-5">Blog Posts</h3>
        {posts.map((post) => (
          <div className="col-lg-3 col-md-4 col-12">
            <Link rel="stylesheet" href={'posts/'+post.id}>
            <div className="card border-0 shadow-lg">
              <img src={post.social_image} alt="image" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
              </div>
            </div>
            </Link>
            <br/>
          </div>)
        )}
      </div>
    </>
  );
}