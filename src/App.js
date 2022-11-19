import ParticlesBg from 'particles-bg'
import GetUrl from './components/GetUrl';


export default function App() {

  return (
    <div className="App">
      <ParticlesBg type="cobweb" color="#FFFFFF" num={200} bg={true} />
      <GetUrl />
    </div>
  );
}




