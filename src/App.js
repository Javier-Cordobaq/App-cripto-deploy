import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Formulario from './components/Formulario';
import Footer from './components/Footer.jsx';
import CarHisto from './components/CarHisto.jsx'
import Spinner from './components/Spinner';
import WelcomeText from './components/WelcomeText.jsx'
import Cards from './components/Cards.jsx';
import './styles/App.css'

const ContenedorInfo = styled.div`
  min-height: 100vh;
  position: relative,
  min-height: 100vh;
  max-height: 100%;
  display: grid;  
  grid-column-gap: 2rem;
  grid-template-columns: 1.5fr 2fr 0.8fr;
  grid-template-rows: 1fr auto; 
  grid-template-areas:  "For Cot Info"
                        "Footer Footer Footer";

  .His {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
    font-weight: 70;
    font-size: 49px;
    margin-top: 40px;
    border-bottom: 6px solid #66A2FE;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Bebas Neue';
  }

  animation-name: Inicio;
  animation-duration: 2s;

  @keyframes Inicio {
    0% {
      margin-right: 10rem;
      }

    100% {
        }
}

@media screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
  max-width: 100%;
} 

`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 70;
  font-size: 49px;
  margin-bottom: 45px;
  margin-top: 40px;
  border-bottom: 6px solid #66A2FE;
`;

function App() {

  const [moneda, guardarMoneda] = useState([]);
  const [criptomoneda, guardarCriptomoneda] = useState([]);
  const [resultado, guardarResultado] = useState([]);
  const [cargando, guardarCargando] = useState(false);

  function onClose(CHANGE24HOUR) {
    guardarResultado(oldCities => oldCities.filter(c => c.CHANGE24HOUR !== CHANGE24HOUR));
  }

  useEffect( () => {

      const cotizarCriptomoneda = async () => {
          // evitamos la ejecución la primera vez
          if(moneda === '') return;

          // consultar la api para obtener la cotizacion
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

          const resultado1 = await axios.get(url);

          // mostrar el spinner
          guardarCargando(true);

          // ocultar el spinner y mostrar el resultado
          setTimeout(() => {

            // cambiar el estado de cargando
            guardarCargando(false);

            // guardar cotizacion

        
            guardarResultado ([...resultado, resultado1.data.DISPLAY[criptomoneda][moneda]])

            /* guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] ); */
          }, 2000);

          
      }
      cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cards resultado={resultado} onClose={onClose}/>

  return (
    <div className='probando'>

    <div className='Welcome'>
      <WelcomeText/>
     </div>
   
     <ContenedorInfo id='Formulario'>

            <div className='contFor'>
            <Heading>Cotiza Criptomonedas</Heading>

            <Formulario
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
            />
            </div>

            <div className='contCot'>
            {componente}
            </div>

            <div className='contH'>
              <h1 className='His'>Historial</h1>
              <CarHisto resultado={resultado}/>
            </div>

            <div className='contFoo'>
            <Footer/>
            </div> 
            
      </ContenedorInfo>    

    </div>
  );
}

export default App;