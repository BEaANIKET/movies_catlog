import React from 'react';
import { useAppContext } from './context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

export const Movies = () => {
  const { movies = [], isLoading } = useAppContext();

  console.log(isLoading);

  if(isLoading){
    console.log("heheheh");
    return (
      <>    
        <Spinner />
      </>
    )
  }

  return (
    <>
      <div className=' w-full flex justify-center  '>
        <div className=' w-full  flex flex-wrap gap-7 justify-center mt-3 lg:w-2/3 '>
          {movies.length === 0 ? <></> : (
            movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))
          )}
        </div>
      </div>

    </>
  );
};
