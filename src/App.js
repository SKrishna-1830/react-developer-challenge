import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Graphs from './pages/Graphs';
import Home from './pages/Home';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/graph" element={<Graphs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;