import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
}

export default App;
