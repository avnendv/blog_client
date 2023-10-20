import { RouterProvider } from 'react-router-dom';
import router from './router';

import './assets/styles/index.scss';

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
}

export default App;
