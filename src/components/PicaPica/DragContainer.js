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

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)
    
        return () => {
          document.removeEventListener('gesturestart', preventDefault)
          document.removeEventListener('gesturechange', preventDefault)
        }
      }, [])

    
      const domTarget = useRef(null)
      const [{ x, y, }, api] = useSpring(
        () => ({
          x: window.innerWidth < 480 ?  Math.floor(Math.random() * -130) : xs,
          y: window.innerWidth < 480 ? Math.floor(Math.random() * 380) + 30 : ys,
          config: { mass: 5, tension: 350, friction: 40 },
        })
      )

      console.log(xs)

      const initialOffset = useRef({ x: xs || 0, y: ys || 0})  

      useGesture(
        {
          onDrag: ({ movement: [dx, dy], first, last }) => {
                if(first){
                    initialOffset.current = {x: x.get(), y: y.get()}
                }
                const {x: ix, y: iy} = initialOffset.current
                const newValue = {
                    x: !last ? dx + ix : Math.max(-200, Math.min(window.innerWidth, dx + ix)),
                    y: !last ? dy + iy : Math.max(-200, Math.min(window.innerHeight, dy + iy))
                }
                console.log(Math.max(100, Math.min(window.innerWidth, dx + ix)))
                api(newValue)
          }  
        },
        { domTarget, eventOptions: { passive: false }, },
      )

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