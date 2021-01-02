import React from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import SignUpButton from './SignUpButton';
import "./NavBar.css";

const NavBar = ({ setAuthenticated }) => {

  return (
    <nav id="nav-bar" className="nav-bar">
      <NavLink to="/" exact={true} activeClassName="active" className="logo">
        <img className="logo-image" src={require("../Assets/logo.png")} alt=""></img>
      </NavLink>
      <div className="buttons">
        <SignUpButton setAuthenticated={setAuthenticated} />
        <NavLink to="/login" exact={true} activeClassName="active" className="log-in">
          Login
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;

// /* /* <li>
//           <NavLink to="/login" exact={true} activeClassName="active">
//           Login as teacher
//           </NavLink>
//           </li> */
//         /* <li>
//           <NavLink to="/login/student" exact={true} activeClassName="active">
//             Login as student
//           </NavLink>
//         </li> */
//         /* <li>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li> */
//         /* <li>
//           <NavLink to="/test" exact={true} activeClassName="active">
//             Test
//           </NavLink>
//         </li> */
//         /* <li>
//           <LogoutButton setAuthenticated={setAuthenticated} />
//         </li> */
//       /* </ul> */

//       /* <NavLink to="/login/student" exact={true} activeClassName="active">
//         Login as student
//       </NavLink>

//       <NavLink to="/users" exact={true} activeClassName="active">
//         Users
//       </NavLink>

//       {<LogoutButton setAuthenticated={setAuthenticated} />}
//   );
// }
