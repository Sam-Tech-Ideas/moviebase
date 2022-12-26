import React,{useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';


const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();


   const slideLeft = () => {
     var slider = document.getElementById("slider" );
     slider.scrollLeft -= slider.offsetWidth;
   };

   const slideRight = () => {
     var slider = document.getElementById("slider");
     slider.scrollLeft += slider.offsetWidth;
   };


  //   useEffect(() => {
  //     onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
  //       setMovies(doc.data()?.savedShows)
  //     }
  //     )
  //  }, [user?.email])


  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4"></h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block"
          onClick={slideLeft}
          size={20}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div className="w-[160px] sm:w-[200px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                className="w-full h-auto block"
                alt={item.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm h-full font-bold flex justify-center items-center text-center">
                  {item?.title}
                </p>

              </div>
            </div>
          ))}
        </div>
        {/* src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} */}
        <MdChevronRight
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideRight}
          size={20}
        />
      </div>
    </div>
  );
}

export default SavedShows