import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = (props) => {
    const navigate = useNavigate()
  return ( 
    <Container className='flex a-center j-between'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
            {props.login ? "Log In" : "Sign In"}</button>
    </Container>
  )
}

const Container = styled.div`
 padding: 0 4rem;
 @media only screen and (max-width: 769px) {
           padding: 0 2rem;
          }
  .logo {
    
    img {
      @media only screen and (max-width: 769px) {
            height: 2rem;
            margin: 1rem;
          }
      height: 5rem;
    }
  }
  button {
    @media only screen and (max-width: 769px) {
            padding: 0.5rem 0.5rem;
            margin: 3rem;
          }
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }`

export default Header