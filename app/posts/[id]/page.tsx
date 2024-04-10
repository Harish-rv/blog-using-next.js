"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

export default function posts(req){
    const postId = req.params.id;
    const [posts,setPosts] = useState([]);
    const [comments,setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err,setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await fetch('https://dev.to/api/articles/'+postId);
                const response2 = await fetch('https://dev.to/api/comments?a_id='+postId);
        
                if (!response1.ok || !response2.ok) {
                    throw new Error('Failed to fetch data');
                }
        
                const result1 = await response1.json();
                const result2 = await response2.json();
                
                setPosts(result1);
                setComments(result2);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); 
            }
        };
    
        fetchData();
    }, []);

    if(loading){
        return <div className="common">Loading...</div>;
      }
    
    if(err){
      return <div className="common">Error: {err}</div>;
    }

    const formattedTime = format(new Date("2024-04-09T21:50:22Z"), 'dd/MM/yyyy HH:mm:ss');
    return(<>
        <div className="col-lg-12 my-4 d-flex flex-column align-items-center justify-content-center">
            <div className="card shadow-lg p-5 single-post mt-5">
                <h1>{posts.title}</h1>
                <p className="my-3"><strong>Published on </strong>: {formattedTime}</p>
                <img className="mb-4" src={posts.social_image} alt="" title={posts.title} />
                <div className="body-content">
                    <div dangerouslySetInnerHTML={{ __html: posts.body_html }} />
                </div>

                {/* comments start here */}
            
                <div className="comments py-4">
                    <h3 className="py-3">comments({posts.comments_count})</h3>
                    <div className="comments-body">
                        {comments.map((comments)=>(
                        <ul className="d-flex">
                            <li className="col-0 rounded-2"><img src={comments.user.profile_image} /></li>
                            <li className="col-11 mx-4 shadow-sm p-2 rounded-3">
                                <strong>{comments.user.name}</strong>
                                <span dangerouslySetInnerHTML={{ __html: comments.body_html }} />
                            </li>
                        </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}