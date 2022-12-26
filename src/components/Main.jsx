import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  const truancateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />
        <div className="absolute w-full top-[20%] md:p-8 p-4">
            <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>
          <div className="my-4">
            <button className="border border-gray-300 text-black  bg-gray-300 py-2 px-6">
              Play
            </button>
            <button className="border border-gray-300 text-white  py-2 px-6 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">{truancateString(movie?.overview)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
