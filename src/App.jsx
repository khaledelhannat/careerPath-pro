import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FirstStep from './pages/FirstStep';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learning-path" element={<FirstStep />} />
    </Routes>
  );
}

export default App;