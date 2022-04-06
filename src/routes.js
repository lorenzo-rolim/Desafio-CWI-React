import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home/index';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datails/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}
