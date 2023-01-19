import React from 'react'
import CardSlide from './CardSlide'



const Slider = ({movies}) => {
  
    const getMoviesFromRange = (from, to) => {
        return movies.slice(from, to)
    }

  return (
    <div>
      <CardSlide data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlide data={getMoviesFromRange(10, 20)} title="New Releases" />
      <CardSlide
        data={getMoviesFromRange(20, 30)}
        title="Blockbuster Movies"
      />
      <CardSlide
        data={getMoviesFromRange(30, 40)}
        title="Popular on Netflix"
      />
      <CardSlide data={getMoviesFromRange(40, 50)} title="Action Movies" />
      <CardSlide data={getMoviesFromRange(50, 60)} title="Epics" />
    </div>
  )
}

export default Slider