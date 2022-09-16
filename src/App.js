import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home/Home'
import AddCard from './pages/AddCard/AddCard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addcard' element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
