import './App.css';

import Login from './components/Login/Login';
import Index from './components/Index/Index';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardsNotebook from './components/Card/CardsNotebooks';
import CardsCelulares from './components/Card/CardsCelulares';
import CardsTablets from './components/Card/CardsTablets';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      
      <Login />
      <Navbar />
      <Index />
      <Navbar />
      {/* <ItemListContainer greeting='Bienvenido a ' text= 'RealTech'/> */}
      <CardsNotebook />
      <CardsCelulares />
      <CardsTablets />
      <Footer />
    </div>
  );
}

export default App;