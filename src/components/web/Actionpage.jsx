import React from 'react'

const Actionpage = () => {
  return (
    <div className='h-screen py-10 bg-[#f1f4c6] text-black dark:bg-[#212121] dark:text-white '>
      <h4 className='text-center text-lg lg:text-5xl'>Compress PDF file</h4>
      <h4 className='text-center text-sm py-6 lg:text-xl'>Reduce file size while optimizing for maximal PDF quality.</h4>
      <div className="flex justify-center">
        <label className="bg-slate-500 h-14 w-56 rounded-md text-base font-martel flex items-center justify-center cursor-pointer">
          Select PDF file
          <input
            type="file"
            multiple
            accept="application/pdf"
            className="hidden"
          />
        </label>

      </div>
    </div>
  )
}

export default Actionpage