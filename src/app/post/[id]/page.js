'use client'
import { useState, useEffect } from "react";

export default function Post({ params }) {
    console.log(params);
    const id = params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id)
            .then((res) => res.json())
            .then(res => setPost(res))
            .catch(error => console.error("Error fetching post:", error));
    }, [id]);

    return (
        <>
            {post && (
                <main className="container mx-auto px-4 py-6">
                    <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-500">Published on {post.created_at}</p>
                    <img src={post.image} alt="Post Image" className="my-4" />
                    <p>{post.description}</p>
                </main>
            )}
        </>
    )
}
