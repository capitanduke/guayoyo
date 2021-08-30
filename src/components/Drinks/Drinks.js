import React, { useRef, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'

    const Conatiner = styled.div`
        background-color: #000;
        position: absolute;
    `;

const Drinks = () => {

    console.log("hello drinks")

      return (
        <Conatiner>
            hello
        </Conatiner>
      )
    
   
};

export default Drinks;