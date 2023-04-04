import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GraphsPage from './pages/GraphsPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/graph" element={<GraphsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;