// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Listingaccount from './pages/listingaccount';
import Detailaccount from './pages/detailaccount';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Listingaccount />} />
        <Route path="/detailaccount/:id" element={<Detailaccount />} />

      </Routes>
  );
}

export default App;
