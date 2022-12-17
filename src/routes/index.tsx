import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />



      <Route path="*" element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};

export default AppRoutes;
