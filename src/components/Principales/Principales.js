import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import images from "../../images"

const Principales = () => {
  console.log(images)
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>PRINCIPALES</p>
          <p className={styles.scrollText}>|</p>
        </ParallaxLayer>

        <ParallaxLayer  offset={0.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start'  }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.0} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.white}`}>
            <p>4th box</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={2.0} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.black}`}>
            <p>4th box</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>PRINCIPALES</p>
          <p className={styles.scrollText}>|</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Principales
