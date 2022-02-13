import React from 'react';
import CardH from './CardH'
import styled from '@emotion/styled';

const Container1 = styled.div` 
display: flex;
flex-direction: column;
object-fit:cover;
`;

export default function Cards({resultado}) {
    console.log(resultado);
  return (
    <Container1 data-aos="flip-left">

        {resultado.map(c => <CardH
        ID={c.CHANGEHOUR}
        PRICE={c.PRICE}
        IMAGEURL={c.IMAGEURL}
        TOSYMBOL={c.TOSYMBOL}
        FROMSYMBOL={c.FROMSYMBOL}
        />)}

    </Container1>
  );
}