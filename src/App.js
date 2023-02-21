
import './App.css';
import Navbar from './components/Navbar';
import Banniere from './components/banniere';
import About from './components/About';
import Service from './components/Service';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className=''>
        <Banniere />

        <About></About>

        <Service></Service>
      </main>
    </>
  )
}

export default App;
