import { RouterProvider } from 'react-router-dom';
import router from './router';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
