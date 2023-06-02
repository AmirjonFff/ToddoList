
import './App.css';
import Advantages from './components/Advantages/Advantages';
import Apartment from './components/Apartment/Apartment';

import BlockSlyder from './components/BlockSliyder/BlockSlyder';
import Hearder from './components/Header/Hearder';
import Nav from './components/Nav/Nav';
import OurAdvatages from './components/OurAdvatages/OurAdvatages';



function App() {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Hearder />
        <div className="sections bg-[#073535]">
          <BlockSlyder />
          <Advantages />
          <OurAdvatages />
          <Apartment />
        </div>
      </div>
    </>
  )
}

export default App