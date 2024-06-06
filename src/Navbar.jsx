import React, { useState } from 'react';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickThreeDot = () => {
    setIsOpen(!isOpen);
  }

  const navItem = [
    {
      name: 'Home',
      link: ''
    },
    {
      name: 'Movies',
      link: ''
    },
    {
      name: 'Series',
      link: ''
    },
  ]

  return (
    <>
      <div className='pt-3 pb-3 flex justify-between w-full bg-white h-fit md:flex md:justify-between '>
        <div className=' md:ml-4 flex items-center gap-2'>
          <ion-icon name="videocam"></ion-icon>
          <h1 className=' text-2xl '> MoviePoint</h1>
        </div >
        <div>
         <SearchBar/>
        </div>
        <div className={`bg-white md:flex md:gap-2 w-full mt-16 md:mt-0 md:w-fit text-xl md:mr-4 transition-all duration-100 ease-in absolute md:static z-[-1] md:z-10 pb-10 md:pb-0 ${ isOpen ? " top-0" : " top-[-400px]"}`} >
          {
            navItem.map((item) => (
              <li className=' cursor-auto w-full md:w-fit flex mt-6 md:mt-0   justify-center text-black list-none ' key={item.name}>
                <a href={item.link} key={item.name} className=' w-fit  hover:text-blue-500 transition-colors'>
                  {item.name}
                </a>
              </li>
            ))
          }
          
        </div>

          <div onClick={handleClickThreeDot} className=' cursor-pointer md:hidden flex justify-center items-center'>
          <ion-icon  size="large" name="ellipsis-vertical-outline"></ion-icon>
          </div>

      </div>
    </>
  )
}

