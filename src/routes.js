import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundRoute from './pages/404';
import FullDetails from './pages/FullDetails';
import Home from './pages/Home/index';

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fulldetails/:id" element={<FullDetails />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </Router>
  );
}
