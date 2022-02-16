import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { GetArtButton } from './components/GetArtButton';
import { DecrementButton } from './components/DecrementButton';
import { IncrementButton } from './components/IncrementButton';
import { CustomObjectIdField } from './components/CustomObjectIdField'

function App() {

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <div>
        <IncrementButton />
        <DecrementButton />
        <CustomObjectIdField />
        <GetArtButton />
      </div>

      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
