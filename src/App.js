import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { GetArtButton } from './components/Buttons/GetArtButton';
import { DecrementButton } from './components/Buttons/DecrementButton';
import { IncrementButton } from './components/Buttons/IncrementButton';
import { CustomObjectIdField } from './components/Buttons/CustomObjectIdField'
import ObjectIdLabel from './components/ObjectIdLabel';


function App() {

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <div>
        <IncrementButton />
        <DecrementButton />
        <CustomObjectIdField />
        <GetArtButton />
        <ObjectIdLabel />
      </div>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
