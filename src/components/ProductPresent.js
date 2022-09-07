import React from 'react';
import styled from 'styled-components';

function ProductPresent({source, title, rubrique, discount, price, description}) {
  return (
    <PresentationContainer>

        <div className="img">
          <img src={source} alt={title} />
        </div>
      
        <div className="top">
          <h3>{rubrique}</h3>
          <span>{discount}</span>
        </div>
       
        <div className="bot">
            <div>
                <span>{title}</span>
                <span>{price}</span>
            </div>
            <p>{description}</p>
        </div>
    </PresentationContainer>
  )
}

export default ProductPresent;

const PresentationContainer = styled.div`
  flex-basis: 25%;
  border-radius: var(--rad-half);
  position: relative;

  > .img{
    height: 70%;
    width: 100%
    border-radius: var(--rad-half);
    
    > img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--rad-half);
    }
  }
   
  > .top{
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 10px;
    left: 0;
  }

  > .bot{
    height: 30%;

    > div{
      font-weight: 600;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

`;