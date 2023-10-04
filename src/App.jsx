import { Outlet } from 'react-router-dom';
import './Global.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="grid-app">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
