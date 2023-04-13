import { RouterProvider } from 'react-router-dom'

import './components/styles/index.scss';
import {router} from './components/router/index'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
