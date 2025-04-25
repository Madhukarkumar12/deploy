
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import bgImage from './assets/industry.avif';
import Login from './components/Login';
import Navbar from './components/Navbar';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/navbar',
    element:<Navbar/>
  }
])

function App() {

  return (
     <div>
      <RouterProvider router={appRouter}/>
     </div>
  )
}

export default App
