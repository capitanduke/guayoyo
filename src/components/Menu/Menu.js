import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components'
import styles from './styles.module.css'

    const Conatiner = styled.div`
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 2rem;
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

    const Close = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        margin-top: -20%;
        color: #fff;
        font-size: 6rem;
        cursor: pointer;

        @media (max-width: 480px) {
            font-size: 2rem;
        }
    `;

    const ContainerTitleFirst = styled.div`
        display: ${props => props.openFirst ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        align-self: center;
        position: relative;
        bottom: 10rem;
        width: 100%;
        height: 10rem;
        color: #fff;
        font-size: 4rem;

        @media (max-width: 480px) {
            
        }
    `;


const Menu = () => {
    const [openFirst, setOpenFirst] = useState(false)
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

    const { i } = useSpring({
        from: { i: 0 },
        i: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { i2 } = useSpring({
        from: { i2: 0 },
        i2: state ? 1 : 0,
        config: { duration: 400 },
    })

    const { bigImageFirst } = useSpring({
        from: { bigImageFirst: 0 },
        bigImageFirst: openFirst ? 1 : 0,
        config: { duration: 400 },
    })

    const { closeX } = useSpring({
        from: { closeX: 0 },
        closeX: openFirst ? 1 : 0,
        config: { duration: 400 },
    })

    const handleCose = () => {
        setOpenFirst(!openFirst)
    }

    return (
        <Conatiner>
            <MenuConatiner onClick={() => toggle(!state)}>
                <animated.div
                        className={styles.text}
                        style={{
                            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                        }}>
                        Menu
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
                            First Element
                    </animated.div>
                </animated.div>
            </FirstElement>
            <SecondElement onClick={() => toggle(!state)}>
                <animated.div
                    className={styles.imageSecondElement}
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
                        Second Element
                    </animated.div>
                </animated.div>
            </SecondElement>
            <animated.div
                className={styles.firstBigImage}
                style={{
                    opacity: bigImageFirst.to({ range: [0, 1], output: [0, 1] }),
                    height: bigImageFirst.to({
                        range: [0, 1],
                        output: [0, 2000],
                    }),
                }}>
                    <Close onClick={() => handleCose()}>
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
                    </Close>
                    <ContainerTitleFirst openFirst={openFirst}>
                        <animated.div
                                style={{
                                    opacity: closeX.to({ range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1], output: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1] }),
                                }}>
                                <h1>PICA PICA</h1>
                        </animated.div>
                    </ContainerTitleFirst>
            </animated.div>
        </Conatiner>
    )
    
   
};

export default Menu;