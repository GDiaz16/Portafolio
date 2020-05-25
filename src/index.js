import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import foto from './foto_portada.jpg';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {visible: false};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.responsive();
  }

  responsive(){
    console.log(this.state.width) 
    if(this.state.width>=900){
      this.setState({visible: true})
      this.showMenu(false);
      this.deanimate();
    }else{
      this.hideMenu(false);
      this.setState({visible: false})
      //this.animate();
    }
  }

  acceptMethods=(showMenu, hideMenu, animate, deanimate)=>{
    this.showMenu = showMenu;
    this.hideMenu = hideMenu;
    this.animate = animate;
    this.deanimate = deanimate;
  }

  toggle(){
    this.setState({visible: !this.state.visible})
    if(this.state.visible){
      this.hideMenu(true);
    }else{
      this.showMenu(true);
    }
  }

  render(){
    return (
      <div>
          <div className='row'>
              <Navbar 
                onClick={()=>this.toggle()}/>
              <Menu 
                visible ={this.state.visible}
                acceptMethods={this.acceptMethods} />
              <Content />
          </div>
      </div>
    );
  }
}

class Navbar extends React.Component{
  render(){
    return(
      <div className='navbar'>
      <div className='row '>
      <button onClick={()=>this.props.onClick()}><i className='fas fa-bars'></i></button>
      <img src={foto} />
      </div>
      </div>
    );
  }
}



class Menu extends React.Component {

  constructor(props){
    super(props);
    this.menu = React.createRef()
    this.state = { width: 0, height: 0 };

  }

  componentDidMount(){
    this.props.acceptMethods(
      this.showMenu.bind(this), 
      this.hideMenu.bind(this),
      this.animate.bind(this),
      this.deanimate.bind(this)
    )
  }

  showMenu(animate){
    if(animate){
      this.animate()
    }else{
      this.deanimate()
    }
    this.menu.current.style.left = '0vw';

}

  hideMenu(animate){
    if(animate){
      this.animate()
    }else{
      this.deanimate()
    }
    this.menu.current.style.left = '-30vw';
  }

  animate(){
    this.menu.current.style.transition = 'left 1s';
  }

  deanimate(){
    this.menu.current.style.transition = 'none';
  }

  render(){
    return (

      <div className='column-menu-home' ref = {this.menu}>
        <PhotoHome />
        <Title />
        <div className='menu-home'>
          <ul>
            <li>Sobre mi</li>
            <li>Resumen</li>
            <li>Proyectos</li>
            <li>Contáctame</li>
          </ul>
        </div>
      </div>
    );
  }
}

function Content(props) {
  return (
    <div >
      <About />
    </div>

  )
}

function PhotoHome(props) {
  return (
    <div className='photo-home'>
      <img src={foto} />
    </div>
  )
}

function Title(props) {
  return (
    <div className='title-home'>
      <h1>Gonzalo <br /> Diaz</h1>
    </div>
  );
}



function About(props) {
  return (
    <div>
      <div className='content-col'>
        <div className='row'>
          <div className='photo-col'>
            <img src={foto} />
          </div>
          <div className='description-col'>
            <h4>Desarrollo de Software</h4>
            <h1>Enderson Gonzalo Diaz Muñoz</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat congue metus. Praesent vel quam ut erat cursus sollicitudin vel in ligula. Cras hendrerit dapibus enim, eleifend mollis diam varius sed. Integer leo velit, cursus ut scelerisque id, volutpat ut sem. Phasellus ut lacinia dui, non dapibus erat. Duis turpis dolor, lobortis et est eget, pulvinar laoreet eros. Ut a ipsum viverra, rhoncus eros in, tincidunt elit. Morbi ullamcorper fermentum posuere. Quisque tristique viverra dui. Nullam pretium neque et metus volutpat vulputate nec sed odio.

      
             </p>
            <button>Descargar CV</button>
          </div>
        </div>
        <div className='row title-2'>
        <h2>Intereses</h2>
        </div>
        <div className='row interest-col'>
        <i className='fas fa-laptop-code'></i>
          <div className='col-50'>
            <h3>Desarrollo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu ac enim congue ullamcorper a et leo. Suspendisse ipsum lacus, viverra sit amet ligula sed, rutrum faucibus neque. Ut id pellentesque lectus, id mattis sapien. Proin sit amet lacinia nibh, sed placerat ante.</p>
          </div>
          <i className='fas fa-brain'></i>
          <div className='col-50'>
          <h3>Inteligencia Artificial</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu ac enim congue ullamcorper a et leo. Suspendisse ipsum lacus, viverra sit amet ligula sed, rutrum faucibus neque. Ut id pellentesque lectus, id mattis sapien. Proin sit amet lacinia nibh, sed placerat ante.</p>
          </div>
        </div>
        <div className='row interest-col'>
        <i className='fas fa-globe'></i>
          <div className='col-50'>
            <h3>Desarrollo Web</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu ac enim congue ullamcorper a et leo. Suspendisse ipsum lacus, viverra sit amet ligula sed, rutrum faucibus neque. Ut id pellentesque lectus, id mattis sapien. Proin sit amet lacinia nibh, sed placerat ante.</p>
          </div>
          <i className='fas fa-robot'></i>
          <div className='col-50'>
          <h3>Robotica</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu ac enim congue ullamcorper a et leo. Suspendisse ipsum lacus, viverra sit amet ligula sed, rutrum faucibus neque. Ut id pellentesque lectus, id mattis sapien. Proin sit amet lacinia nibh, sed placerat ante.</p>
          </div>
        </div>
        <div className='footer'>

        </div>
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
