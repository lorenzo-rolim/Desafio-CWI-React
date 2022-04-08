import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundRoute from './pages/404';
import Home from './pages/Home/index';

export default function MainRoutes() {
  return (
    <Router basename={public.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </Router>
  );
}
