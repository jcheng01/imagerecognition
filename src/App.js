
import GetImage from './components/GetUrl';
import ParticlesBg from 'particles-bg'
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#FFFFFF" num={200} bg={true} />
        <GetImage />
      </div>
    );
  }
}


export default App;
