import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button` 
    position: absolute;
    top: 10px;
    right: 10px;
    transition: width 2s, height 2s, transform 0.5s;
    height: 35px;
    width: 35px;
    background-color: #c62929;
    border: none;
    border-radius: 5px 45px 5px 5px;

    &:hover {
        transform: scale(0.9);
        cursor:pointer;
    }

    @media screen and (max-width: 500px) {
        border-radius: 50%;
        height: 20px;
        width: 20px;
        top: 15px;
        right: 15px;

        &:active {
            transform: scale(0.9);
            cursor:pointer;
        }
    }

    `;

const Section = styled.div`
    position: relative;
    scroll-snap-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    place-items: center;
    grid-template-rows: auto auto 1fr auto;
    min-height: 85vh;
    max-height: 85vh;
    max-width: 100%;
    border-radius: 48px;

    .close{
      display: flex;
    }

    .contImg {

    }

    .contTitulo {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .contInfo {
        display: flex;
        flex-direction: column;
    }
    
    .verde {
        color: green;
    }

    .rojo {
        color: red;
    }

    @media screen and (max-width: 500px) {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
        max-height: 100%;
    }
`;

const Info = styled.p`
    margin-top: 0;
    font-size: 25px;
    margin-bottom: 1rem;
    font-family: 'Bebas Neue';
`;

const Precio = styled.p`
min-width: 90%;
max-width: 90%;
margin: 0px;
margin-left: 30px;
margin-right: 30px;
margin-top: 40px;
margin-bottom: 45px;
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-align: center;
font-weight: 70;
font-size: 49px;
border-bottom: 6px solid #66A2FE;

@media screen and (max-width: 500px) {
    font-size: 40px;
}

`

const Cotizacion = ({PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL, onClose, ID}) => {

    return ( 
        <Section id={ID}>
            <div className='contTitulo'>
            <Precio>El precio es: {PRICE}</Precio> 
            <div className='close'>
            <Button onClick={onClose}/>
            </div>
            </div>
            <div className='contInfo'>
            <Info>Precio más alto del día: <span className='verde'>{HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span className='rojo'>{LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span> </Info>
            <Info>Última Actualización: <span>{LASTUPDATE}</span> </Info>
            </div>
            <div className='contImg'>
            <img src={`https://www.cryptocompare.com/`+IMAGEURL} width="130" height="130" alt="Not Found" />
            </div>
        </Section>
     );
}
 
export default Cotizacion;