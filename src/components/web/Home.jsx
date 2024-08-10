import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  
  const data = [
    {img:"/img/merge.png", link:"/chac", lable:"Merge PDF",    description:"Combine multiple PDFs into one document."},
    {img:"/img/split.png", link:"/chac", lable:"Split PDF",    description:"Separate one page from the rest of the document."},
    {img:"/img/compress.png", link:"/chac", lable:"Compress PDF", description:"Reduce the size of your PDF without losing quality."},
  ]

  return (
    <>
    <div className='bg-[#f1f4c6] text-black dark:bg-[#212121] dark:text-white py-16 lg:py-10 p-2 lg:px-5'>
      <h3 className=' text-2xl lg:text-5xl text-center font-libre font-bold'>Docs Tool provide You All-in-One Solution for Effortless PDF Management.</h3>
      <p className='text-lg lg:text-2xl text-center font-overlock px-14  lg:px-24 py-4 text-zinc-500'>Every tool you need to work with PDFs, right at your fingertips. Completely FREE and user-friendly! Merge, split, compress, convert, rotate, unlock, and watermark PDFs with just a few clicks.</p>
    </div>

    <div className= "text-black bg-[#f1f4c6] dark:bg-[#212121] dark:text-white px-5 lg:px-24 pb-20 flex flex-col lg:flex-row gap-3 ">
      {data.map((item, index) => (
        <NavLink to={item.link} className="h-36 w-full bg-[#dcdfbb] dark:bg-[#3b3b3b] flex gap-3 items-center lg:block lg:h-56 lg:w-60 shadow-lg rounded-md lg:mx-auto py-2 px-3">
          <div className="h-24 w-24">
            <img className='h-24 w-24 font-overlock mb-3' src={item.img} alt="item.link" />
          </div>
          <div className="">
            <h4 className='text-lg py-1 font-overlock  '>{item.lable}</h4>
            <h4 className='text-sm py-1 font-overlock '>{item.description}</h4>
          </div>

        </NavLink>
      ))}
    </div>
    </>
  )
}

export default Home