import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter([{
  path:"/",
  element: <App/>,
errorElement: <ErrorPage/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes}/>
  </StrictMode>,
)
