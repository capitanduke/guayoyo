import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import {Device, Medies} from './UI/media'
import {Colors} from './UI/color'
import { animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Spring } from 'react-spring'

    

    const ContainerPicaPica = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: inherit;
    `;

    const ImageContainer = styled.div`
        width: 100%;
        height: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;

        & > img {
            width: 60rem;
            z-index: 100;
        }

        @media (max-width: 480px) {
            & > img {
                width: 40rem;
                z-index: 100;
            }
        }

    `;

    const ContainerTitlePica = styled.div`
        width: 100%;
        height: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 12rem;
        right: 2rem;

        @media(${Device.mobileS}) {
            font-size: 5rem;
            right: 11rem;
            top: 14rem;
        }
    `;

    const TitlePica = styled.div`
        font-family: 'Shrikhand', cursive;
        font-size: 5rem;
        color: ${Colors.black};

        @media(${Device.mobileS}) {
            font-size: 3rem;
            width: 43rem;
            position: relative;
            top: 5rem;
            z-index: 10;
            left: 5rem;
        }
    `;

    const ListPica = styled.div`
        color: ${Colors.black}; 
        position: relative; 
        right: -10rem; 
        top: 4rem;

        & p{
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            position: relative;
            right: 3rem;
            top: 12rem;
            width: 20rem;
            
            & p{
                font-size: 1rem;
                color: #000;
            }
        }

        
        
    `;

    const BorderPicaImage2 = styled.div`
        border: 1px solid #ff6014;
        opacity: 0.5;
        width: 87rem;
        height: 90rem;
        position: absolute;
        z-index: 0;

        @media (max-width: 480px) {
            width: 50rem;
        }
    `;

    const BorderPicaImage3 = styled.div`
        background-color: #fff;
        width: 80rem;
        height: 70rem;
        top: 3rem;
        position: absolute;
        z-index: 0;

        @media (max-width: 480px) {
            width: 42rem;
            height: 34rem;
        }
    `;

    const BorderPicaText2 = styled.div`
        background-color: #ffef35;
        width: 120rem;
        height: 50rem;
        position: absolute;
        z-index: 0;

        @media (max-width: 480px) {
            background-color: #ffef35;
            width: 50rem;
            height: 22rem;
            position: absolute;
            z-index: 0;
            width: 22rem;
            top: 6rem;
            left: 3rem;
        }
    `;

    // Little helpers ...
    const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

    //<img src="https://esguayoyo.com/wp-content/uploads/2021/05/guayoyo-white.png" style={{ width: '20%' }} />

    

const Header = (props) => {

    

    useEffect(() => { 
    }, [])

    

    return (
        
        <Parallax pages={3} style={{ top: '0', left: '0',
            backgroundColor: '#000', }}>
            
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', zIndex: '12', color: '#000' }}>
                <Spring
                    loop
                    from={{ opacity: 0, color: 'red', transform: 'translateY(0px)' }}
                    to={[
                        { opacity: 1, color: '#ffaaee', transform: 'translateY(0px)' },
                        { opacity: 0, color: 'rgb(14,26,19)', transform: 'translateY(200px)' },
                    ]}>
                    {styles => (
                    <animated.div style={styles}><h1 style={{ color: '#fff' }}>Scroll down</h1></animated.div>
                    )}
                </Spring>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'green', zIndex: '10' }} />

            <ParallaxLayer
                offset={0.6}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ContainerPicaPica>
                    <ImageContainer>
                        <BorderPicaImage2></BorderPicaImage2>
                        <BorderPicaImage3></BorderPicaImage3>
                        <img src="https://esguayoyo.com/wp-content/uploads/2021/06/nachos-scaled.jpg" />
                    </ImageContainer>
                    <ContainerTitlePica >
                        <BorderPicaText2></BorderPicaText2>
                        <TitlePica>Pica Pica</TitlePica>
                        <ListPica>
                            <p>- Tabla de Quesos</p>
                            <p>- Nachos</p>
                            <p>- Tequeños</p>
                            <p>- Buffalo Wings</p>
                            <p>- Patatas Bravas</p>
                            <p>- Pizzas</p>
                        </ListPica>
                    </ContainerTitlePica>
                </ContainerPicaPica>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: 'yellow' }} />
        </Parallax>
    )
    
   
};

export default Header;