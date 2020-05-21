import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Home(props) {
  return (
    <div className='row'>
      <ButtonHome />
      <Title />
    </div>

  );
}
function ButtonHome(props) {
  return (
    <div className='column-button-home'>
      <div className='button-home'>
        <button onClick=''>Comenzar</button>
      </div>
    </div>);
}

function Title(props) {
  return (
    <div className='column-title-home'>
      <div className='title-home'>
        <h1>Hola, soy Gonzalo Diaz</h1>
      </div>
    </div>);
}

function Menu(props) {
  return (

    <div className='column-menu-home'>
      <div className='menu-home'>
        <ul>
          <li>Sobre mi</li>
          <li>Proyectos</li>
          <li>Conocimientos</li>
          <li>Contáctame</li>
        </ul>
      </div>
    </div>
  )
}

class Body extends React.Component {
  render() {
    return (
      <div> <Home /></div>
    );
  }
}


ReactDOM.render(
  <Body />,
  document.getElementById('root')
);
