
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header.jsx'

function App() {
const [bookmarks,setbookmarks] = useState([])

const addtoBookMark = blog =>{
  const newBookMarks = [...bookmarks, blog]
  setbookmarks(newBookMarks)
}

  return (
    <>
      <section className='container mx-auto px-10'> 
      <Header></Header>
      <div className='md:flex gap-3'>
        <Blogs addtoBookMark={addtoBookMark}></Blogs> 
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

      </section>
    </>
  )
}

export default App
