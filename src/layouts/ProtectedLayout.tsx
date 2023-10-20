import { Outlet } from 'react-router-dom';

function ProtectedLayout() {
  return (
    <>
      <h1>Protected Layout</h1>
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
