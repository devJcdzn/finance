import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { sidebarData } from './sidebarData';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="header-side">
        <h2>Hello, Jean Carlos</h2>
      </div>

      <div className="sidebar-content">
        <ul className="content">
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className='side-link' >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar