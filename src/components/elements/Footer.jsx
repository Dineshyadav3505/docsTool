import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const data =[
        {lable:"docs Tool",     link1:"/", title1:"Home", link2:"/", title2:"security", link3:"/", title3:"pricing", link4:"/",        title4:"Tools", },
        {lable:"social media",  link1:"/", title1:"facebook", link2:"/", title2:"LinkedIn", link3:"/", title3:"X", link4:"/",        title4:"instagram", },
        {lable:"company",       link1:"/about", title1:"About Us", link2:"/privacyPolicy", title2:"Legal & Privacy ", link3:"/", title3:"", link4:"/contact", title4:"contact", }
    ]
  return (
    <footer className="bg-[#f1f4c6] text-black dark:bg-[#212121] dark:text-white py-4 p-2 lg:px-5">
        <div className="py-5 flex justify-between flex-wrap ">
            {data.map((item, index)=>(
                <div className="flex lg:px-20 flex-col gap-2 px-7 w-[47%] lg:w-[23%] py-3 h-44 mt-3">
                    <h6 className='uppercase font-overlock'>{item.lable}</h6>
                    {item.title1 &&<NavLink to={item.link1} className="font-overlock capitalize text-xs lg:text-sm ">{item.title1}</NavLink>}
                    {item.title2 &&<NavLink to={item.link2} className="font-overlock capitalize text-xs lg:text-sm ">{item.title2}</NavLink>}
                    {item.title3 &&<NavLink to={item.link3} className="font-overlock capitalize text-xs lg:text-sm ">{item.title3}</NavLink>}
                    {item.title4 &&<NavLink to={item.link4} className="font-overlock capitalize text-xs lg:text-sm ">{item.title4}</NavLink>}
                </div>
            ))}
        </div>
        <p className='font-overlock text-xs text-center'>�� 2023 Docs Tool. All rights reserved.</p>
        
    </footer>
  )
}

export default Footer