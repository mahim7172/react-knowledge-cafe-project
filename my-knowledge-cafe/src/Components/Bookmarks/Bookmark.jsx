import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title, cover } = bookmark;
    return (
<div>
    
<div className='text-xl font-bold px-5 bg-slate-300 rounded-lg mb-3 ml-3 flex items-center'>

<p className='p-4'>{title}</p>
<img className='w-20 h-20 rounded-lg ' src={cover} alt={title} />

</div>

</div>

    
    );
};
Bookmark.propTypes = {
    bookmarks: PropTypes.array.isRequired
  


}
export default Bookmark;