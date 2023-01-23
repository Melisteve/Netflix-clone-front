import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/home.jpg"
import MovieLogo from "../assets/homeTitle.webp"
import { useDispatch, useSelector } from "react-redux"
import {  FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';

const Netflix = () => {

  const navigate = useNavigate();
 const [isScroolled, setIsScrolled ] = useState(false);

 const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
 const movies = useSelector((state) => state.netflix.movies)

 const dispatch = useDispatch()

 useEffect(() =>{
  dispatch(getGenres())
 },[])

 useEffect(() =>{
  if(genresLoaded) dispatch(fetchMovies({ type: "all"}))
  
 },[genresLoaded])
 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
//console.log(movies);
  return (
    <Container>
      <Navbar isScroolled={isScroolled}/>
      <div className="hero">
        <img src={backgroundImage} alt="bachground" className='backgroud-image'/>
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="movie logo" />
          </div>
          <div className="buttons flex">
            <button className='flex j-center a-center' onClick={() => navigate('/player')}><FaPlay/>Play</button>
            <button className='flex j-center a-center'><AiOutlineInfoCircle/>More Info</button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      @media only screen and (max-width: 769px) {
            height: 100vh;
            width: 100vw;
          }
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          @media only screen and (max-width: 769px) {
            width: 70%;
            height: 100%;
            margin-left: 1rem;
          }
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        @media only screen and (max-width: 769px) {
             margin: 2rem;
             gap: 2rem;
          }
        margin: 5rem;
        gap: 2rem;
        button {
          @media only screen and (max-width: 769px) {
              font-size: 0.8rem;
              gap: 2rem;
              border-radius: 0.2rem;
              padding: 0.5rem;
              padding-left: 2rem;
              padding-right: 2.4rem;
          }
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default Netflix