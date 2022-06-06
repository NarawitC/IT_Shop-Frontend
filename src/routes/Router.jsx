import { Route, Routes } from 'react-router-dom';
import HeaderAndFooter from '../components/layout/HeaderAndFooter';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter></HeaderAndFooter>} />
    </Routes>
  );
}
export default Router;
