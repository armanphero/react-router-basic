import { Link, NavLink, Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import NavLinkCompo from './components/NavLinkCompo/NavLinkCompo';

function App() {
  const navigation = useNavigation();
  const { state } = navigation;

  return (
    <>
      <div className='bg-slate-400 py-3 text-white'>
        <nav className='flex items-center container mx-auto justify-between'>
          <div>
            <Link to="/">Arman</Link>
          </div>
          <ul className='flex gap-5 text-xl'>
            <li>
              <NavLinkCompo to={'/'}>Home</NavLinkCompo>
            </li>
            <li>
              <NavLinkCompo to={"/about"}>About</NavLinkCompo>
            </li>
            <li>
              <NavLinkCompo to={"/contact"}>Contact</NavLinkCompo>
            </li>
            <li>
              <NavLinkCompo to={"/services"}>Services</NavLinkCompo>
            </li>
            <li>
              <NavLinkCompo to={"/users"}>Users</NavLinkCompo>
            </li>
            {/* <li><Link to="/about">About</Link></li> */}
          </ul>
        </nav>
      </div>
      {
        state === 'loading' && <div className={`text-blue-400 text-center font-bold`}>Loading.....</div>
      }
      <Outlet></Outlet>
    </>
  )
}

export default App
