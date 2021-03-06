import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
	
 constructor() {
		super();
		this.state = {
			input: '',
		}
	}
	onInputChange = (event) => {
		console.log(event);
  }
  onButtonSubmit = () => {
    console.log('click');
  }
	
  render() {
    return (
      <div className="App">
		<Particles className='particles' params={particlesOptions} />
        <Navigation />
		<Logo />
		<Rank />
		<ImageLinkForm 
	    	 onInputChange={this.onInputChange}
      		 onButtonSubmit={this.onButtonSubmit}
	    />
		{	//<FaceRecog />
		}
      </div>
    );
  }
}

export default App;
