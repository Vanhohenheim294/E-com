import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Catalogue from './components/Catalogue';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Catalogue titre="Categories" />
    </div>
  );
}

export default App;
