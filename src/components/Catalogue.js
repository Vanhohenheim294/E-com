import React from 'react'
import styled from 'styled-components';
import CatSlide from './CatSlide';
import ProductPresent from './ProductPresent';

import { Link, useNavigate } from 'react-router-dom';

function Catalogue({titre}) {

    const article = useNavigate();

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
            img: "assets/cat-2.jpg",
            link: "#",
            rubrique: "Rupture",
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
            img: "assets/cat-2.jpg",
            link: "#",
            rubrique: "Limite",
            discount: "-10%",
            price: "190.000 FRCS",
            description: "Tres lourd"
        },
        {
            id: 6,
            nom: "Matelas à Ressort",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "-30%",
            price: "40.000 FRCS",
            description: "Tres solide"
        },
        {
            id: 7,
            nom: "Matelas Latex",
            img: "assets/cat-2.jpg",
            link: "#",
            rubrique: "Limite",
            discount: "-10%",
            price: "190.000 FRCS",
            description: "Tres lourd"
        },
        {
            id: 8,
            nom: "Matelas à Ressort",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "-30%",
            price: "40.000 FRCS",
            description: "Tres solide"
        },
        {
            id: 9,
            nom: "Matelas Latex",
            img: "assets/cat-2.jpg",
            link: "#",
            rubrique: "Limite",
            discount: "-10%",
            price: "190.000 FRCS",
            description: "Tres lourd"
        },
        {
            id: 10,
            nom: "Matelas à Ressort",
            img: "assets/cat-1.jpg",
            link: "#",
            rubrique: "Solde",
            discount: "-30%",
            price: "40.000 FRCS",
            description: "Tres solide"
        },
        {
            id: 11,
            nom: "Matelas Latex",
            img: "assets/cat-2.jpg",
            link: "#",
            rubrique: "Limite",
            discount: "-10%",
            price: "190.000 FRCS",
            description: "Tres lourd"
        }
    ];

  return (
    <CatalogueContainer className="container">

        <h3 className="title">{titre}</h3>

        <CatSlide />

        <div className="products">
            {catList.map(item => (
                <Link to="/details">
                    <ProductPresent source={item.img} title={item.nom} rubrique={item.rubrique} discount={item.discount} price={item.price} description={item.description} link={item.link} />
                </Link>
            ))}
        </div>
    </CatalogueContainer>
  )
}

export default Catalogue;

const CatalogueContainer = styled.div`
    width: 100%;
    background: green;

    >.products{

        min-height: 300px;
        background: red;
    
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;

    }
`;