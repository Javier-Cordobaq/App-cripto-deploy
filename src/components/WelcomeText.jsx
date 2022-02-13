import React from 'react'
import styled from '@emotion/styled';

const Contenedor = styled.div`
    heigth: 100vh
    width: 100%;
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    color: white;
    animation-name: Home;
    animation-duration: 2s;

    @keyframes Home {
        0% {
            margin-top: 10rem;
            opacity: 0%;}
        100% {
            opacity: 100%;} 
    }
`;

const Titulo = styled.h1`
    font-family: 'Bebas Neue', cursive;
    
    font-size: 60px;
    margin-bottom: 0px;
    margin-top: 0px;
`;

const A = styled.a`
    text-decoration: none;
    text-align: center;
    margin-top: 10px;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    padding: 1rem;
    background-color: #66a2fe;
    border: none;
    width: 200px;
    border-radius: 50px;
    color: #FFF;
    transition: width 2s, height 2s, transform 0.5s, background-color .3s ease;
    &:hover {
        transform: scale(0.9);
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const WelcomeText = () => {
    return (
        <Contenedor>
            <Titulo>Bienvenido a ConverterCo</Titulo>
            <A href='#Formulario'>Comenzar a cotizar</A>
        </Contenedor>
    )
}

export default WelcomeText
