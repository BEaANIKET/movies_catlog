import React from 'react'
import { Search } from './Search'
import { Movies } from './Movies'
import { Navbar } from './Navbar'
import './App.css'

export const Home = () => {

  return (
    <>
      <div className='bg w-full '>
        <Navbar />
        <Search />
        <Movies />
      </div>

    </>
  )
}
