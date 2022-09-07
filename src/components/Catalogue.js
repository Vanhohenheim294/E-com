import React from 'react'
import styled from 'styled-components';
import ProductCat from './ProductCat';
import ProductPresent from './ProductPresent';

function Catalogue({titre}) {


    const catList = [
        {
            id: 0,
            nom: "Matelas Mousse",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "-10%",
            price: "90.000 FRCS",
            description: "Tres leger" 
        },
        {
            id: 2,
            nom: "Matelas Orthopedique",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "7%",
            price: "100.000 FRCS",
            description: "Pliable"
        },
        {
            id: 3,
            nom: "Matelas à Eau",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "",
            discount: "-5%",
            price: "70.000 FRCS",
            description: "Tres pratique"
        },
        {
            id: 4,
            nom: "Matelas à Ressort",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "-30%",
            price: "40.000 FRCS",
            description: "Tres solide"
        },
        {
            id: 5,
            nom: "Matelas Latex",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Limite",
            discount: "-10%",
            price: "190.000 FRCS",
            description: "Tres lourd"
        }
    ];

  return (
    <CatalogueContainer className="container">

        <h3>{titre}</h3>

        <div>
            {catList.map(item => (
                <ProductPresent source={item.img} title={item.nom} rubrique={item.rubrique} discount={item.discount} price={item.price} description={item.description} link={item.link} />
            ))}
        </div>
    </CatalogueContainer>
  )
}

export default Catalogue;

const CatalogueContainer = styled.div`
    width: 100%;
    background: green;

    h3{
        font-size: var(--ft-xxl);
        margin-bottom: var(--mg-half);
        color: blue;
    }

    >div{

        height: 250px;
        background: red;
    
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    
        > :not(:nth-last-child(1)){
            /* margin-right: 8px; */
        }
    }
`;