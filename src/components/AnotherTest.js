import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import {Device, Medies} from './UI/media'
import {Colors} from './UI/color'
import { animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Spring } from 'react-spring'
import Cervezas from './Cervezas/Cervezas'

    
    /*const ListPica = styled.div`
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
    `;*/

    const MainConatiner = styled.div`
        background-color: red;
        display: flex;
        justify-content: center;
        height: 100vh;
        width: 100vw; 

        @media (max-width: 480px) {
            
        }
    `;

    const Conatiner = styled.div`
        background-color: red;
        display: flex;
        flex-wrap: wrap;
        height: 100vh;
        width: 90vw;
        padding: 5%;

        @media (max-width: 480px) {
            padding: 9.5%;
            height: 32%;
        }
    `;

    const Cards = styled.div`
        background-color: ${Colors.white};
        display: flex;
        flex: 1 0 30%;
        width: 12rem;
        height: 12rem;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='4' stroke-dasharray='2%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
        align-items: center;
        justify-content: center;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        
        @media (max-width: 480px) {
            height: 100%;
            width: 25rem;
        }
    `;

    const Content = styled.div`
        background-color: #ffef35;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 10%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        @media (max-width: 480px) {
            height: 9rem;
        }
    `;

    const VideoContainer = styled.div` 
        background-image: url("https://esguayoyo.com/wp-content/uploads/2021/06/nachos-scaled.jpg");
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        object-fit: cover;
    `;

    const CervezasContainer = styled.div` 
        height: 100%;
        width: 100%;
        background-color: #000;

        @media (max-width: 480px) {
            .jt{
                top: 3rem;
                left: 1rem;
                font-size: 8vmin;
            }
        }
    `;

    



    // Little helpers ...
    const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

    //<img src="https://esguayoyo.com/wp-content/uploads/2021/05/guayoyo-white.png" style={{ width: '20%' }} />

    

const Main = (props) => {

    

    useEffect(() => { 
    }, [])

    

    return (
        <MainConatiner>
            <Conatiner>
                <Cards>
                    <VideoContainer></VideoContainer>
                </Cards>
                <Cards>
                    <CervezasContainer>
                        <Cervezas />
                   </CervezasContainer>
                </Cards>
                <Cards>
                    3
                </Cards>
                <Cards>
                    4
                </Cards>
                <Cards>
                    5 
                </Cards>
                <Cards>
                    6
                </Cards>
                <Cards>
                    7
                </Cards>
                <Cards>
                    8
                </Cards>
                <Cards>
                    9
                </Cards>
                <Content>HElloooooooo</Content>
            </Conatiner>
        </MainConatiner>
    )
    
   
};

export default Main;