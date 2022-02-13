import React from 'react';
import styled from '@emotion/styled';

const Prueba = styled.div`
display: grid;
place-items: center;
color: white; 
font-family: Arial, Helvetica, sans-serif;
transition: width 2s, height 2s, transform 0.5s;

&:hover {
    transform: scale(0.9);
    cursor:pointer;
}

p {
  margin: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 40px;
}
`;

const A = styled.a`
  font-family: 'Bebas Neue', cursive;
  text-decoration: none;
  text-transform: none;
  color: #FFF;
  font-size: 30px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const CardH = ({PRICE, ID, TOSYMBOL, IMAGEURL, FROMSYMBOL}) => {
  return (
  <Prueba>
      <A href={`#${ID}`}>{TOSYMBOL} &nbsp;
      <img src={`https://www.cryptocompare.com/`+IMAGEURL} width="20" height="20" alt="Not Found" /> &nbsp;
      {FROMSYMBOL}
      </A>
  </Prueba>
  );
};

export default CardH;
