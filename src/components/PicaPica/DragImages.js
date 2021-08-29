import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import images from "../../images"
import DragContainer from "./DragContainer"

    const Imagen = styled.div`
        background-image: url(${props => props.image});
        background-color: #cccccc;
        height: 500px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        @media (max-width: 480px) {
            height: 200px;
            width: 200px;
        }

    `


const DragImages = () => {

    
      return (
        <>
        {images.map((img, i) => (
            <DragContainer key={i} count={i} xs={img.x} ys={img.y}>
                    <Imagen image={img.image} />   
            </DragContainer>
        ))}
        </>

      )
    
   
};

export default DragImages;