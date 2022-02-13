import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 0.5rem;
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    border-radius: 30px;
    margin-top: 0px;
`;

const Error = ({mensaje}) => {
    return (  
        <MensajeError className='pru'>{mensaje}</MensajeError>
    );
}
 
export default Error;