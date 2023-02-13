
import './App.css';
import Navbar from './components/Navbar';
import MyFigure from './components/MyFigure';
import MySection from './components/MySection';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <main className='flex justify-between'>
        <MySection />
        <MyFigure />
      </main>
    </>
  )
}

export default App;
