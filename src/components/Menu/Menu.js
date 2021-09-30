import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components'
import styles from './styles.module.css'
import DragImages from "../PicaPica/DragImages"
import Drinks from "../Drinks/Drinks"
import AboutUs from "../AboutUs/AboutUs"
import Principales from "../Principales/Principales"

    const Conatiner = styled.div`
        background-color: #fcde67;
        display: flex;
        justify-content: center;
        flex-direction: column;
    `;

    const MenuConatiner = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;

        @media (max-width: 480px) {
            & > div {
                font-size: 2rem;
            }
        }
    `;

    const FirstElement = styled.div`
        display: flex;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 480px) {
            & > div > div {
                font-size: 2rem;
            }
        }
    `;

    const SecondElement = styled.div`
        display: flex;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 480px) {
            & > div > div {
                font-size: 2rem;
            }
        }
    `;

    const ThirdElement = styled.div`
        display: flex;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 480px) {
            & > div > div {
                font-size: 2rem;
            }
        }
    `;

    const ForthElement = styled.div`
        display: flex;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 480px) {
            & > div > div {
                font-size: 2rem;
            }
        }
    `;

    const Conatiner2 = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px 100%;
        height: 50vh !important;
        width: 100%;
        background-color: #000;
        z-index: 3000;

        @media (max-width: 480px) {
            grid-template-rows: 50px 200px 100%;
        }
    `;

    const Conatiner3 = styled.div`
        background-color: #ffffff;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    `;

    const Conatiner4 = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px 100%;
        height: 50vh !important;
        width: 100%;
        background-color: #5CDB95;
        z-index: 3000;

        @media (max-width: 480px) {
            grid-template-rows: 50px 200px 100%;
        }
    `;

    const Conatiner5 = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 200px 200px 100%;
        height: 50vh !important;
        width: 100%;
        background-color: #F13C20;
        z-index: 3000;

        @media (max-width: 480px) {
            grid-template-rows: 50px 200px 100%;
        }
    `;

    const Close = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const ClosePica = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fcde67;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const ClosePrin = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fcde67;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const CloseXdrinks = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const TitleContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const TitleContainerPica = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fcde67;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const TitleContainerDrinks = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const TitleContainerPrin = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fcde67;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const Body = styled.div`
        background-color: #000;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    `
    
    const BodyPrincipales = styled.div`
        background-color: transparent;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        
    `

    const BodySalads = styled.div`
        background-color: #5CDB95;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    `

    const BodyDrinks = styled.div`
        background-color: #F13C20;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    `

  


const Menu = () => {
    const [openFirst, setOpenFirst] = useState(false)
    const [openSecond, setOpenSecond] = useState(false)
    const [openThird, setOpenThird] = useState(false)
    const [openForth, setOpenForth] = useState(false)
    const [state, toggle] = useState(false)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
    })

    const { b } = useSpring({
        from: { b: 0 },
        b: state ? 1 : 0,
        config: { duration: 1000 },
    })

    const { f } = useSpring({
        from: { f: 0 },
        f: state ? 1 : 0,
        config: { duration: 1000 },
    })

    const { s } = useSpring({
        from: { s: 0 },
        s: state ? 1 : 0,
        config: { duration: 900 },
    })

    const { t } = useSpring({
        from: { t: 0 },
        t: state ? 1 : 0,
        config: { duration: 900 },
    })

    const { i } = useSpring({
        from: { i: 0 },
        i: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { i1 } = useSpring({
        from: { i1: 0 },
        i1: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { i2 } = useSpring({
        from: { i2: 0 },
        i2: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { i3 } = useSpring({
        from: { i3: 0 },
        i3: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { bigImageFirst } = useSpring({
        from: { bigImageFirst: 0 },
        bigImageFirst: openFirst ? 1 : 0,
        config: { duration: 1200 },
    })

    const { closeX } = useSpring({
        from: { closeX: 0 },
        closeX: openFirst ? 1 : 0,
        config: { duration: 1050 },
    })

    const { title } = useSpring({
        from: { title: 0 },
        title: openFirst ? 1 : 0,
        config: { duration: 1050 },
    })

    const { bigImageFirst2 } = useSpring({
        from: { bigImageFirst2: 0 },
        bigImageFirst2: openSecond ? 1 : 0,
        config: { duration: 1200 },
    })

    const { closePrincipales } = useSpring({
        from: { closePrincipales: 0 },
        closePrincipales: openSecond ? 1 : 0,
        config: { duration: 1050 },
    })

    const { titlePrincipales } = useSpring({
        from: { titlePrincipales: 0 },
        titlePrincipales: openSecond ? 1 : 0,
        config: { duration: 1050 },
    })


    const { bigImageFirst3 } = useSpring({
        from: { bigImageFirst3: 0 },
        bigImageFirst3: openThird ? 1 : 0,
        config: { duration: 1200 },
    })

    const { closeSalads } = useSpring({
        from: { closeSalads: 0 },
        closeSalads: openThird ? 1 : 0,
        config: { duration: 1050 },
    })

    const { titleSalads } = useSpring({
        from: { titleSalads: 0 },
        titleSalads: openThird ? 1 : 0,
        config: { duration: 1050 },
    })

    const { bigImageFirst4 } = useSpring({
        from: { bigImageFirst4: 0 },
        bigImageFirst4: openForth ? 1 : 0,
        config: { duration: 1200 },
    })

    const { closeDrinks } = useSpring({
        from: { closeDrinks: 0 },
        closeDrinks: openForth ? 1 : 0,
        config: { duration: 1050 },
    })

    const { titleDrinks } = useSpring({
        from: { titleDrinks: 0 },
        titleDrinks: openForth ? 1 : 0,
        config: { duration: 1050 },
    })

    let hoch = 1200
    if(window.innerWidth < 480){
        hoch = 750
    }


    return (
        <Conatiner>
            <MenuConatiner onClick={() => toggle(!state)}>
                <animated.div
                        className={styles.text}
                        style={{
                            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                        }}>
                        <h1>MENU</h1>
                </animated.div>
                <animated.div
                        className={styles.border}
                        style={{
                            width: b.to({ range: [0, 1], output: [-150, 2850] }),
                        }}>
                </animated.div>
            </MenuConatiner>
            <FirstElement onClick={() => setOpenFirst(!openFirst)}>
                <animated.div
                        className={styles.imageFirstElement}
                        style={{
                            opacity: i.to({ range: [0, 1], output: [0, 1] }),
                            left: i.to({
                                range: [0, 1],
                                output: [-100, 0],
                            }),
                        }}>
                    <animated.div
                        className={styles.firstElement}
                        style={{
                            opacity: f.to({ range: [0, 1], output: [0, 1] }),
                            top: f.to({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [10, 15, 20, 25, 30, 35, 40, 45],
                            }),
                        }}>
                        
                        <h4>Pica Pica</h4>
                    </animated.div>
                </animated.div>
            </FirstElement>
            <SecondElement onClick={() => setOpenSecond(!openSecond)}>
                <animated.div
                    className={styles.imageSecondElement}
                    style={{
                        opacity: i1.to({ range: [0, 1], output: [0, 1] }),
                        right: i1.to({
                            range: [0, 1],
                            output: [-150, 0],
                        }),
                    }}>
                    <animated.div
                        className={styles.secondElement}
                        style={{
                            opacity: s.to({ range: [0, 1], output: [0, 1] }),
                            top: s.to({
                                range: [0, 1],
                                output: [15, 50],
                            }),
                        }}>
                        <h4>Principales</h4>
                    </animated.div>
                </animated.div>
            </SecondElement>
            <ThirdElement onClick={() => setOpenThird(!openThird)}>
                <animated.div
                    className={styles.imageThirdElement}
                    style={{
                        opacity: i3.to({ range: [0, 1], output: [0, 1] }),
                        left: i3.to({
                            range: [0, 1],
                            output: [-100, 0],
                        }),
                    }}>
                    <animated.div
                        className={styles.thirdElement}
                        style={{
                            opacity: t.to({ range: [0, 1], output: [0, 1] }),
                            top: t.to({
                                range: [0, 1],
                                output: [15, 50],
                            }),
                        }}>
                        <h4>Ensaladas</h4>
                    </animated.div>
                </animated.div>
            </ThirdElement>
            <ForthElement onClick={() => setOpenForth(!openForth)}>
                <animated.div
                    className={styles.imageForthElement}
                    style={{
                        opacity: i2.to({ range: [0, 1], output: [0, 1] }),
                        right: i2.to({
                            range: [0, 1],
                            output: [-150, 0],
                        }),
                    }}>
                    <animated.div
                        className={styles.secondElement}
                        style={{
                            opacity: s.to({ range: [0, 1], output: [0, 1] }),
                            top: s.to({
                                range: [0, 1],
                                output: [15, 50],
                            }),
                        }}>
                        <h4>Bebidas</h4>
                    </animated.div>
                </animated.div>
            </ForthElement>
            <animated.div
                className={styles.firstBigImage}
                style={{
                    opacity: bigImageFirst.to({ range: [0, 1], output: [0, 1] }),
                    height: bigImageFirst.to({
                        range: [0, 1],
                        output: [0, hoch],
                    }),
                    top: bigImageFirst.to({
                        range: [0, 1],
                        output: [1200, 0],
                    }),
                }}>
                    <Conatiner2>
                        <ClosePica onClick={() => setOpenFirst(!openFirst)}>
                            <animated.div
                                style={{
                                    opacity: closeX.to({ range: [0, 1], output: [0, 1] }),
                                    rotate: closeX.to({
                                        range: [0, 1],
                                        output: [0, 90],
                                    }),
                                }}>
                                    X
                            </animated.div>        
                        </ClosePica>
                        <TitleContainerPica>
                            <animated.div
                                style={{
                                    opacity: title.to({ range: [0, 1], output: [0, 1] }),
                                }}>
                                <h1>PICA PICA</h1>
                            </animated.div>
                        </TitleContainerPica>
                        <Body>
                            <DragImages />
                        </Body>
                    </Conatiner2>
            </animated.div>
            <animated.div
                className={styles.secondBigImage}
                style={{
                    opacity: bigImageFirst2.to({ range: [0, 1], output: [0, 1] }),
                    height: bigImageFirst2.to({
                        range: [0, 1],
                        output: [0, hoch],
                    }),
                    top: bigImageFirst2.to({
                        range: [0, 1],
                        output: [1200, 0],
                    }),
                }}>
                    <Conatiner3>
                        <ClosePrin onClick={() => setOpenSecond(!openSecond)}>
                            <animated.div
                                style={{
                                    opacity: closePrincipales.to({ range: [0, 1], output: [0, 1] }),
                                    rotate: closePrincipales.to({
                                        range: [0, 1],
                                        output: [0, 90],
                                    }),
                                }}>
                                    X
                            </animated.div>        
                        </ClosePrin>
                        <BodyPrincipales>
                            <Principales />
                        </BodyPrincipales>
                    </Conatiner3>
            </animated.div>
            <animated.div
                className={styles.thirdBigImage}
                style={{
                    opacity: bigImageFirst3.to({ range: [0, 1], output: [0, 1] }),
                    height: bigImageFirst3.to({
                        range: [0, 1],
                        output: [0, hoch],
                    }),
                    top: bigImageFirst3.to({
                        range: [0, 1],
                        output: [1200, 0],
                    }),
                }}>
                    <Conatiner4>
                        <Close onClick={() => setOpenThird(!openThird)}>
                            <animated.div
                                style={{
                                    opacity: closeSalads.to({ range: [0, 1], output: [0, 1] }),
                                    rotate: closeSalads.to({
                                        range: [0, 1],
                                        output: [0, 90],
                                    }),
                                }}>
                                    X
                            </animated.div>        
                        </Close>
                        <TitleContainer>
                            <animated.div
                                style={{
                                    opacity: titleSalads.to({ range: [0, 1], output: [0, 1] }),
                                }}>
                                <h1>Salads</h1>
                            </animated.div>
                        </TitleContainer>
                        <BodySalads>
                            <AboutUs />
                        </BodySalads>
                    </Conatiner4>
            </animated.div>
            <animated.div
                className={styles.forthBigImage}
                style={{
                    opacity: bigImageFirst4.to({ range: [0, 1], output: [0, 1] }),
                    height: bigImageFirst4.to({
                        range: [0, 1],
                        output: [0, hoch],
                    }),
                    top: bigImageFirst4.to({
                        range: [0, 1],
                        output: [1200, 0],
                    }),
                }}>
                    <Conatiner5>
                        <CloseXdrinks onClick={() => setOpenForth(!openForth)}>
                        <animated.div
                                style={{
                                    opacity: closeDrinks.to({ range: [0, 1], output: [0, 1] }),
                                    rotate: closeDrinks.to({
                                        range: [0, 1],
                                        output: [0, 90],
                                    }),
                                }}>
                                    X
                            </animated.div>        
                        </CloseXdrinks>
                        <TitleContainerDrinks>
                            <animated.div
                                style={{
                                    opacity: titleDrinks.to({ range: [0, 1], output: [0, 1] }),
                                }}>
                                <h1>DRINKS</h1>
                            </animated.div>
                        </TitleContainerDrinks>
                        <BodyDrinks>
                            <Drinks />
                        </BodyDrinks>
                    </Conatiner5>
            </animated.div>
        </Conatiner>
    )
    
   
};

export default Menu;