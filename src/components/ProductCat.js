import React from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components';

function ProductCat({source, titre, link}) {

  return (
    <Router>
        <ProductContainer>
            <img src={source} alt={titre} />
            <span><Link to={link}> {titre} </Link></span>
        </ProductContainer>
    </Router>
  )
}

export default ProductCat;

const ProductContainer = styled.div`
    height: 180px; 
    flex-basis: 30%;
    min-width: 200px;
    position: relative;
    border-radius: var(--rad-full);

    :not(nth-last-child(1)){
        /* margin-right: 10px; */
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--rad-full);

    }

    span{
        position: absolute;
        bottom: 10px;
        left: 5px;
        font-size: var(--ft-xl);

        > *{

            color: white !important;
        }
        
    }
`;