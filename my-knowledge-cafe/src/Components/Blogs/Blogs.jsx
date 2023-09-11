import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('../../../public/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="text-4xl md:w-2/3">
            <h3>Blogs : {Blogs.length} </h3>

        </div>
    );
};

export default Blogs;