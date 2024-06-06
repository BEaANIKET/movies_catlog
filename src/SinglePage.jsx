import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from './context/AppContext';

export const SinglePage = () => {

  const { id } = useParams();
  const { movies } = useAppContext();
  const data = movies.filter((movieData) => id === movieData.imdbID)
  // console.log(data);

  return (
    <>
      <div className="relative bg-gray-800 h-screen flex justify-center items-center">
        <div className=" flex justify-center items-center h-fit flex-col">
          <img src={data[0].Poster} alt="" />
          <div className=' h-full flex justify-start'>
            <div className=" h-fit bg-gray-900 text-white p-4 flex items-center flex-col">
              <p className="text-lg sm:text-xl">{data[0].Title}</p>
              <p> Year : {data[0].Year} </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
