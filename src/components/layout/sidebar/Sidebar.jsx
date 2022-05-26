import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      Sidebar
      <Outlet></Outlet>
    </div>
  );
}

export default Sidebar;
