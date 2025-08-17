import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MoviesGrid from './Components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='Container'>
           <Header></Header>
           <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
