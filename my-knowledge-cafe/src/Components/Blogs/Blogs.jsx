import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({addtoBookMark}) => {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('../../../public/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="text-4xl md:w-2/3 mt-10">
           
            {
                Blogs.map(blog=> 
                <Blog key={blog.id} blog={blog}
                addtoBookMark={addtoBookMark}
                ></Blog>)
            }

        </div>
    );
};
Blogs.propTypes={
    addtoBookMark:PropTypes.func.isRequired
        
    
}


export default Blogs;