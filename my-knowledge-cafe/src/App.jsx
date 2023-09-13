
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header.jsx'

function App() {
const [bookmarks,setbookmarks] = useState([])
const [readingBookmarkes, setreadingBookmarkes] = useState(0)

const addtoBookMark = blog =>{
  const newBookMarks = [...bookmarks, blog]
  setbookmarks(newBookMarks)
}
const handleMarkBook = time =>{
  const reading = readingBookmarkes + time
  setreadingBookmarkes(reading)
}
  return (
    <>
      <section className='container mx-auto px-10'> 
      <Header></Header>
      <div className='md:flex gap-3'>
        <Blogs addtoBookMark={addtoBookMark} handleMarkBook={handleMarkBook}></Blogs> 
        <Bookmarks bookmarks={bookmarks} readingBookmarkes={readingBookmarkes}></Bookmarks>
      </div>

      </section>
    </>
  )
}

export default App
