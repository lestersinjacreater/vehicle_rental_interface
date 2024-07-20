// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// redux and redux-persist
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './app/store.ts';
import LandingPage from './pages/landingpage.tsx';
import Error from './pages/error.tsx';


// components
const router = createBrowserRouter([

  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />
  },






]);

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
</React.StrictMode>,
);