import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingBookmarkes }) => {
    return (
        <div className="md:w-1/3 mt-10 bg-slate-500 p-5 h-3/4 rounded-lg">
            <h2 className="text-center text-4xl font-bold bg-slate-600 rounded-lg ml-3 p-3 text-white">Add to Card :
                {bookmarks.length}</h2>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            <div className='text-center text-4xl font-bold bg-slate-600 rounded-lg ml-3 p-3 text-white'>
                <h2 > Reaing Time:{readingBookmarkes}</h2>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingBookmarkes: PropTypes.func
}
export default Bookmarks;