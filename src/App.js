import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardsNotebook from './components/Card/CardsNotebooks';
import CardsCelulares from './components/Card/CardsCelulares';
import CardsTablets from './components/Card/CardsTablets';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CardsNotebook />
      <CardsCelulares />
      <CardsTablets />
      <Footer />
    </div>
  );
}

export default App;
