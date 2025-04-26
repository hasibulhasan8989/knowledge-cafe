

import {useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'

import Header from './Component/Header/Header'

function App() {

  const[bookmarks,setBookmarks]=useState([])
  const[readTime,setReadTime]=useState(0)

  const handleBookmark=(title,reading_time)=>{
      console.log(title,reading_time)
      const newBookmark=[...bookmarks,title]
      setBookmarks(newBookmark)

      const newReadTime=readTime+reading_time
      setReadTime(newReadTime)
  }
   

   
  return (
    <>
     
     <Header></Header>
     <div className='flex justify-between max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks} readTime={readTime} ></Bookmarks>
     </div>
    
      
    </>
  )
}

export default App
