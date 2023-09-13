import PropTypes from 'prop-types';
import { BsBookmarkFill } from 'react-icons/bs';

const Blog = ({ blog , addtoBookMark, handleMarkBook}) => {

    const { title, cover, author_img, author, reading_time, posted_date, hashtags } = blog
    return (
        <div >
            <img className='w-full' src={cover} alt={`cover title : ${title}`} />

            <div className='flex justify-between mt-5'>
                <div className='flex text-base gap-3 font-semibold'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt={author} />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-base font-normal'>{reading_time} mins</span>
                    <button onClick={()=>handleMarkBook(reading_time)} className='text-red-600'><BsBookmarkFill></BsBookmarkFill></button>

                </div>
            </div>
            <h2 className='font-bold'> {title}</h2>
            <p className='text-base font-medium mb-5'>
                {
                    hashtags.map((data, idx) =>
                        <span key={idx}> <a href="">#{data}
                        </a> </span>)
                }
            </p>
            <button

            onClick={()=>addtoBookMark(blog)}
             className='text-lg font-semibold underline m-5 text-red-600'
             >Add to cart</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
 addtoBookMark : PropTypes.func.isRequired,
 handleMarkBook:PropTypes.func
    
}
export default Blog;