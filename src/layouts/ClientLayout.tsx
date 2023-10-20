import { Outlet } from 'react-router-dom';

function ClientLayout() {
  return (
    <>
      <h1>Client Layout</h1>
      <Outlet />
    </>
  );
}

export default ClientLayout;
