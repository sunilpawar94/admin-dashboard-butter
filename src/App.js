import './App.css';
import Homeleft from './homeleft.jsx';
import Homeright from './homeright.jsx';
import Welcomeline from './welcomeline.jsx';
import Topsecthree from './topsecthree.jsx';
import Socialine from './bottomsecline.jsx';
import Bottomsecthree from './bottomsecthree.jsx';



function App() {
  return (
    <div className="Home">
      <div className='mainsectionleft'>
      <Homeleft/>
      </div>
      <div className='mainsectionleft'>
      <Homeright/>
      <Welcomeline/>
      <Topsecthree/>
      <Socialine/>
      <Bottomsecthree/>
      
      </div>

    </div>
  );
}

export default App;
