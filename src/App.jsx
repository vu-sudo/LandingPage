import './App.scss';

import Header from '@sections/Header/Header';
import Banner from '@sections/Banner/Banner';
import Manage from '@sections/Manage/Manage';
import Provide from '@sections/Provide/Provide';
import Process from '@sections/Process/Process';
import Reference from '@sections/Reference/Reference';
import Contact from '@sections/Contact/Contact';
import Footer from '@sections/Footer/Footer';
import Arrow from '@components/Arrow/Arrow';

function App() {
  return (
   <div className='app'>
    <Header></Header>
    <Banner></Banner>
    <Manage></Manage>
    <Provide></Provide>
    <Process></Process>
    <Reference></Reference>
    <Contact></Contact>
    <Footer></Footer>
    <Arrow></Arrow>
   </div>
  );
}

export default App;
