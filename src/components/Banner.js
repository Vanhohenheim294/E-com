import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

function Banner() {
  return (
    <Router>
      <BannerContainer>
          <p>
            <span>
              Les meilleurs matelas <br/> à bon prix.
            </span>
            <Link className="link" to="/">Aller Voir</Link>
          </p>
          <div>
            <img src="assets/img-4-1.svg" alt="hero" />
          </div>
      </BannerContainer>
    </Router>
  )
}

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(45deg, #3e32a8, #e310c7);

  display: flex;
  align-items: center;

  > div{
    width: 60%;
    height: 100%;
    background: transparent;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: fit-content;
    }
  }

  > p{
    /* position: absolute;
    top: 50%; */
    width: 40%;
    background-color: transparent;
    padding: 5px 20px;

    > span{
      width: fit-content;
      color: white;
      font-weight: 600;
      font-size: 40px;
      text-transform: capitalize;
    }

    > .link{
      width: fit-content;
      background-color: green;
      padding: 10px 15px;
      border-radius: 10px;
      color: white;
      text-decoration: none;
      margin-top: 15px;
      display: block;
    }
  }
`;