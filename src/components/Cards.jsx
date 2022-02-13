import React from 'react';
import Cotizacion from './Cotizacion';
import CardH from './CardH'
import styled from '@emotion/styled';

const Container1 = styled.div` 

display: flex;
flex-direction: column;
object-fit:cover;

/* display: grid;
grid-template-columns: 100%;
gap: 1rem;  
margin-top: 50px;
margin-bottom: 50px; */
`;

export default function Cards({resultado, onClose}) {
    console.log(resultado);
  return (
    <Container1 data-aos="flip-left">

      {resultado.map(c => <Cotizacion
        ID={c.CHANGEHOUR}
        PRICE={c.PRICE}
        HIGHDAY={c.HIGHDAY}
        LOWDAY={c.LOWDAY}
        CHANGEPCT24HOUR={c.CHANGEPCT24HOUR}
        LASTUPDATE={c.LASTUPDATE}
        IMAGEURL={c.IMAGEURL}
        onClose={() => onClose(c.CHANGE24HOUR)}
        />)}
    </Container1>
  );
}
