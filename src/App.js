import {Routes, Route} from 'react-router-dom';
import './App.css';

import Lobby from './screens/Lobby'
import ChatRoom from './screens/ChatRoom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Lobby/>} />
        <Route path='/room' element={<ChatRoom/>} />
      </Routes>
    </div>
  );
}

export default App;
