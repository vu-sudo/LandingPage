import './App.scss';

import Header from './components/Header';
import Banner from './components/Banner';
import Manage from './components/Manage';
import Provide from './components/Provide';
import Process from './components/Process';
import Reference from './components/Reference';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Arrow from './components/Arrow';

function App() {
  return (
   <>
    <Header></Header>
    <Banner></Banner>
    <Manage></Manage>
    <Provide></Provide>
    <Process></Process>
    <Reference></Reference>
    <Contact></Contact>
    <Footer></Footer>
    <Arrow></Arrow>
   </>
  );
}

export default App;
