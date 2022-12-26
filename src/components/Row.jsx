import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
    const [movies,setMovies] = useState([])
  

    useEffect(() => {
        axios.get(fetchURL)
        .then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    console.log(movies)

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft -= slider.offsetWidth
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft += slider.offsetWidth
    }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block"  onClick={slideLeft} size={20}/>
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        {/* src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} */}
        <MdChevronRight className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideRight} size={20} />
      </div>
    </div>
  );
}

export default Row