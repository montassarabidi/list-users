
import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './Components/AppBar'
import CardListUser from './Components/CardListUser';
import UserDashbord from './Components/UserDashbord';
import {reviews} from './data'
function App() {
  const [index, setIndex] = useState(0)
  return (
    <div className="App">
     <ResponsiveAppBar/>
    <div className='userup'>
    <UserDashbord lengthRev={reviews.length} setIndex={setIndex} review={reviews[index]}/>
    <CardListUser setIndex={setIndex} reviews={reviews}/>

    </div>
    
    </div>
  );
}

export default App;
