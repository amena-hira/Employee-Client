import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
