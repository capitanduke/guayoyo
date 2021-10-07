import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import images from "../../images"
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 36px;
`

const Dish = styled.p`
  font-size: 24px;
`

const Principales = () => {
  console.log(images)
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={8}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>PRINCIPALES</p>
          <p className={styles.scrollText}>|</p>
        </ParallaxLayer>

        <ParallaxLayer  offset={0.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start'  }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.0} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <Card>
              <Title>ESPAGUETIS | MACARRONES EN SALSA</Title>
              <Dish>4 quesos - Bolognese - Carbonara - Pesto</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.5} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.black}`}>
            <Card>
              <Title>LASAGNA BOLOGNESE</Title>
              <Dish>Casera & hecha al horno</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.0} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card}  ${styles.roastbeefText}`}>
            <Card>
              <Title>LOMO DE CERDO</Title>
              <Dish>Rodajas de lomo de cerdo horneado con patatas rústicas o ensalada</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={2.0} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.cerdo}`}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={4} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start'  }}>
          <div className={`${styles.card} ${styles.risotto}`}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.risottoText}`}>
            <Card>
              <Title>Risotto de setas e Ibérico</Title>
              <Dish>Acompañado con queso queso parmesano</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={1.0} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${styles.card} ${styles.roastbeef}`}>
            <p></p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.3} speed={0.3} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card}  ${styles.cerdoText}`}>
            <Card>
              <Title>ROASTBEEF & CHIPS</Title> 
              <Dish> Carpaccio de Roastbeef con patatas rústicas</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={6} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start'  }}>
          <div className={`${styles.card} ${styles.asado}`}>
            <p></p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.asadoText}`}>
            <Card>
              <Title>ASADO NEGRO</Title>
              <Dish>Rodajas de asado sellado en su salsa, acompañado con patatas rústicas o ensalada</Dish>
            </Card>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={styles.scrollText}>PRINCIPALES</p>
          <p className={styles.scrollText}>|</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Principales
