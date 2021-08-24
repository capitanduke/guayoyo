import React, { useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import styled from 'styled-components'
import styles from './styles.module.css'

    const Conatiner = styled.div`
        background-color: #000;
        position: absolute;
    `;


    const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
    const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

const DragContainer = ({children, xs, ys}) => {

    console.log(xs)
    console.log(ys)

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)
    
        return () => {
          document.removeEventListener('gesturestart', preventDefault)
          document.removeEventListener('gesturechange', preventDefault)
        }
      }, [])

      if(window.innerWidth < 480){
        xs = -5
        ys = 50
      }
    
      const domTarget = useRef(null)
      const [{ x, y, }, api] = useSpring(
        () => ({
          x: 0,
          y: 0,
          config: { mass: 5, tension: 350, friction: 40 },
        })
      )
    
      useGesture(
        {
          onDrag: ({ first, offset: [x, y] }) => 
            api({ x, y }),
        },
        { domTarget, eventOptions: { passive: false }, },
      )

      console.log("x get()", x.get())

      return (
        <Conatiner>
            <animated.div
                ref={domTarget}
                className={styles.card}
                style={{
                x,
                y,
                }}>
                
                {children}    
            </animated.div>
        </Conatiner>
      )
    
   
};

export default DragContainer;