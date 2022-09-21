import React from 'react';
import styled from 'styled-components';

function ProductDetails() {
  return (
    <Container className="container">
        <h3 className="title">Mon Article</h3>

        <div className="left">
            <div className="img-banner">
                <img src="assets/img-3.png" alt="" />
            </div>

            <div className="product-title">
                <h3>Logement entier : logement ⸱ Chez Loic, Estelle & Co</h3>
                <span>4 voyageurs - 1 chambre - 2 lits - 1 salle de bain</span>
            </div>

            <h2>Description</h2>

            <p className="product-description">
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
            </p>

            <p className="product-description">
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
            </p>

            <p className="product-description">
                Chaque réservation comprend une protection gratuite en cas d'annulation par l'hôte, d'inexactitudes dans la description du logement, ainsi que d'autres problèmes comme les difficultés d'accès au logement.
            </p>

            <div className="product-description">
                <h3>Laissez un commentaire...</h3>
                <textarea placeholder="Votre texte" className="comment"/>

                <div className="user-comment">
                    <div className="user-profile">
                        <span className="user-img"><img src="assets/cat-2.jpg" alt="yop" /></span>
                        <div className="user-info">
                            <h2>Mohamed Sallah</h2>
                            <span>Membre depuis janvier 2018</span>
                        </div>
                    </div>
                    <p>
                        Spécialistes de la gestion de location de vacances et passionnés du secteur du tourisme depuis de nombreuses années, 
                        notre agence vous propose des logements de qualité qui sauront…
                    </p>
                </div>

                <div className="user-comment">
                    <div className="user-profile">
                        <span className="user-img"><img src="assets/cat-2.jpg" alt="yop" /></span>
                        <div className="user-info">
                            <h2>Sadio Mane</h2>
                            <span>Membre depuis Decembre 2020</span>
                        </div>
                    </div>
                    <p>
                        Spécialistes de la gestion de location de vacances et passionnés du secteur …
                    </p>
                </div>


            </div>
        </div>


        <div className="cart-div">
            <div className="price">
                <span>140.000 - Frcs</span>
                <span>L'unité</span>
            </div>          
            
            <div className="quantite">
                <div>
                    <span>Quantité</span>
                    <input type="number" min="1" />
                </div>
                <div>
                    <p>Prix : 520.000 - Frcs</p>
                </div>
            </div>

            <button className="add">Ajouter au Panier</button>

            <p className="prevent">N'ayez crainte, aucun montant ne vous sera débité pour le moment.</p>

            <div className="liste-frais">
                <div className="frais">
                    <span>Frais de Livraison</span>
                    <span>1500 - Frcs</span>
                </div>
            </div>

            <div className="total">
                <span>Total</span>
                <span>141.500 - Frcs</span>
            </div>
        </div>
    </Container>
  )
}

export default ProductDetails;

const Container = styled.div`
    width: 100%;
    position: relative;

    > .left{
        width: 70%;
        border-radius: var(--rad-half);
        
        > .img-banner{
            width: 100%;
            height: 50vh;
            border-radius: var(--rad-half);
            
            > img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: var(--rad-half);
            }
        }

        > .product-title{
            margin: var(--mg-full) 0;
            padding: 20px 0;
            /* background: red; */
            border-bottom: 1px solid #DDDDDD;

            > h3{
                font-size: var(--ft-xxl);
                margin-bottom: var(--mg-half);
                /* background: yellow; */
            }

            > span{
                font-size: var(--ft-xl);
                color: gray;
                /* background: green; */
            }
        }

        > .product-description{
            padding: 20px 0;
            width: 80%;
            /* background: aqua; */
            border-bottom: 1px solid #DDDDDD;

            > .comment{
                margin-top: 20px;
                padding: 5px;
                font-size: var(--ft-md);
                width: 60%;
            }

            > .user-comment{
                margin-top: 40px;
                width: 70%;
                background: whitesmoke;
                border-radius: var(--rad-half);
                padding: var(--pd-half);
                
                > .user-profile{
                    width: 100%;
                    max-width: 400px;
                    min-width: 250px;
    
                    display: flex;
                    align-items: center;
                    /* background: green; */
                    margin-bottom: 10px;

                    > .user-img{
                        width: 64px;
                        height: 64px;
                        border-radius: 100%;

                        > img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 100%;
                        }
                    }

                    > .user-info{
                        display: flex;
                        flex-direction: column;

                        margin-left: 10px;

                        > :nth-child(1){
                            font-size: var(--ft-md);
                            
                        }

                        > :nth-child(2){
                            color: gray;
                            font-size: var(--ft-sm);
                        }
                    }
    
                }
            }

        }

    }


    >.cart-div{
        position: absolute;
        top: 90px;
        right: 15PX;
        width: 28%;
        max-width: 372px;
        /* height: 60vh; */
        /* background: pink; */
        border: 1px solid whitesmoke;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);


        padding: var(--pd-half);
        border-radius: var(--rad-half);

        > .price{
            width: 100%;
            padding: 10px 5;
            font-size: var(--ft-xl);
            font-weight: 500;

            display: flex;
            justify-content: space-between;

            > :nth-child(2){
                color: gray;
            }
        }

        > .quantite{
            margin-top: 30px;
            border: 1px solid gray;
            border-radius: var(--rad-half);
            
            > div{
                display: flex;
                justify: space-evenly;
                align-items: center;
                /* background: blue; */
                
                > span{
                    font-size: var(--ft-xl);
                    padding: var(--pd-half);
                    width: 50%;
                    /* background: red; */
                    
                    :nth-child(1){
                        border-right: 1px solid gray; 
                    }
                }

                > input{
                    /* margin-left: 20px; */
                    text-align: center;
                    border-radius: 5px;
                    border: none;
                    height: 60px;
                    width: 50%;
                    outline: none;
                }

                > p{
                    width: 100%;
                    font-size: var(--ft-xl);
                    font-weight: 700;
                    padding: var(--pd-half);
                    text-align: center;
                    /* background: green; */
                }
            }

            > :nth-child(1){
                border-bottom: 1px solid gray;
            }
        }

        > .add{
            width: 100%;
            margin-top: 20px;
            font-size: var(--ft-md);
            font-weight: 600;
            padding: var(--pd-half);
            border: 1px solid gray;
            outline: none;
            border-radius: var(--rad-half);
        }

        > .prevent{
            margin: 20px 0;
            text-align: center;
            font-size: var(--ft-sm);
            /* background: red; */
        }

        > .liste-frais{
            width: 100%;
            display: flex;
            gap: 10px;
            flex-direction: column;
            /* background: red; */
            
            > .frais{
                width: 100%;
                display: flex;
                margin-bottom: 10px;
                justify-content: space-between;
                
            }
        }

        > .total{
            font-size: var(--ft-xl);
            font-weight: 600;
            width: 100%;
            display: flex;
            margin-top: 20px;
            padding: 15px 0 10px 0;
            /* background: red; */
            border-top: 1px solid gray;
            justify-content: space-between;
                
        }

    }
`;