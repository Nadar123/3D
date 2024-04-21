// import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from 'react-router-dom';
// import Home from '../components/Home/Home';
// import AddContact from '../components/AddContact/AddContact';
// import ContactList from '../components/ContactList/ContactList';

// const AppRouter = () => {
//   const [users, setUsers] = useState<[] | any>([]);
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to='/'>Home</NavLink>
//           </li>
//           <li>
//             <NavLink to='/addcontact'>Add Contact</NavLink>
//           </li>
//           <li>
//             <NavLink to='/contactlist'>Contact List</NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route
//           path='/addcontact'
//           element={<AddContact setUsers={setUsers} />}
//         />
//         <Route
//           path='/contactlist'
//           element={<ContactList setUsers={setUsers} users={users} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import AddContact from '../components/AddContact/AddContact';
import ContactList from '../components/ContactList/ContactList';

const AppRouter = () => {
  const [users, setUsers] = useState<[] | any>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <nav>
        <div
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className='hamburger'></div>
        </div>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to='/' onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/addcontact' onClick={toggleMenu}>
              Add Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/contactlist' onClick={toggleMenu}>
              Contact List
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/addcontact'
          element={<AddContact setUsers={setUsers} />}
        />
        <Route
          path='/contactlist'
          element={<ContactList setUsers={setUsers} users={users} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
