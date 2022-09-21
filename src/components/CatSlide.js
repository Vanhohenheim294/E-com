import React from 'react';
import styled from 'styled-components';

function CatSlide() {

    const liste = [
        {
            id: "0",
            place: "3 Places",
            type: "Orthopedic"
        },
        {
            id: "1",
            place: "2 Places",
            type: "Orthopedic"
        },
        {
            id: "2",
            place: "3 Places",
            type: "Mousse"
        },
        {
            id: "3",
            place: "2 Places",
            type: "Mousse"
        },
        {
            id: "4",
            place: "3 Places",
            type: "Eau"
        },
        {
            id: "5",
            place: "3 Places",
            type: "Ressort"
        },
        {
            id: "6",
            place: "2 Places",
            type: "Eau"
        },
        {
            id: "7",
            place: "3 Places",
            type: "Plume"
        }
    ];

    const params = [];

    liste.forEach(element => {
        if( !params.includes(element.place)){
            params.push(element.place);
        
        }else if( !params.includes(element.type)){
            params.push(element.type);
        }
    });

  return (
    <CatSLideContainer>
        {params.map(item => (
            <span className="item">{item}</span>
        ))}
    </CatSLideContainer>
  )
}

export default CatSlide;

const CatSLideContainer = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    overflow-x: hidden;
    margin-bottom: var(--mg-half);

    > .item{
        padding: 5px 15px;
        border-radius: var(--rad-full);
        background-color: gray;

    }

`;