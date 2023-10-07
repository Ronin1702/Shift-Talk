import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const styles = {
  nav: {
    position: "sticky",
    zIndex: 1,
    backgroundColor: "#302F31"
  },
  logo: {
    width: 50,
    height: 50
  },
  links: {
    marginRight: 10
  }
};

const Nav = ({ currentPage }) => {
  const [activeLink, setActiveLink] = useState('/');
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className={activeLink === '/login' ? 'active' : ''}
            onClick={() => handleLinkClick('/login')}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className={activeLink === '/signup' ? 'active' : ''}
            onClick={() => handleLinkClick('/signup')}
          >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// function Nav() {
//     const location = useLocation();
//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     // This state variable will track whether the modal is in login mode or signup mode.
//     const [loginMode, setLoginMode] = useState(true); 


//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

//     const handleLoginSignupClick = () => {
//         setShowModal(true);
//     };

//     const handleModalClose = () => {
//         setShowModal(false);
//     };

//     const handleLoginModeToggle = () => {
//         setLoginMode(!loginMode);
//     };

//     const handleDownloadClick = () => {
//       // Create a new anchor element
//       const link = document.createElement('a');
//       // Set the href attribute to the URL of the file to download
//       link.href = 'https://example.com/path/to/file.pdf';
//       // Set the download attribute to the desired filename
//       link.download = 'filename.pdf';
//       // Add the anchor element to the DOM
//       document.body.appendChild(link);
//       // Click the anchor element to start the download
//       link.click();
//       // Remove the anchor element from the DOM
//       document.body.removeChild(link);
//     };

//     return (

//         <nav className='navbar fixed-top navbar-expand-lg navbar-light' style={styles.nav}>
//         <a
//             className='navbar-brand'>

//             <img
//                 src={logo}
//                 alt="logo"
//                 loading="lazy"
//                 style={styles.logo}/>
//                 <h5 className="d-inline align-middle"> Shift Talk </h5>
//         </a>

//         <button
//             className="custom-toggler navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={!isNavCollapsed ? true : false}
//                 aria-label="Toggle navigation"
//             onClick={handleNavCollapse}>

//             <span
//                 className="navbar-toggler-icon" />
//         </button>

//         <div
//             className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
//             id="navbarSupportedContent">

//             <ul className="navbar-nav">
//                 <li className="nav-item" style={styles.links}>
//                         <Link to="/"
//                             className={location.pathname === "/" ? 'nav-item nav-link active' : 'nav-item nav-link'}>
//                                 Home
//                         </Link>

//                 </li>


//                 <li className="nav-item" style={styles.links}>
//                     <a
//                         onClick={handleLoginSignupClick}
//                         style={{ cursor: "pointer" }}
//                     > Login/Signup
//                     </a>
//                 </li>

//                 <li className="nav-item" style={styles.links}>
//                     <button
//                         type="button"
//                         className="nav-link"
//                         onClick={handleDownloadClick}
//                     > Download
//                     </button>
//                 </li>
//             </ul>
//         </div>

//         {showModal && (
//         <Modal
//           isOpen={showModal}
//           onClose={handleModalClose}
//           title={loginMode ? "Login" : "Signup"}
//           content={
//             <div>
//               {loginMode ? (
//                 <form>
//                   <input
//                     type="text"
//                     placeholder="Username"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                   />
//                   <button type="submit">Login</button>
//                 </form>
//               ) : (
//                 <form>
//                   <input
//                     type="text"
//                     placeholder="Username"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                   />
//                   <button type="submit">Signup</button>
//                 </form>
//               )}
//               <div>
//                 <button onClick={handleLoginModeToggle}>
//                   Switch to {loginMode ? "Signup" : "Login"}
//                 </button>
//               </div>
//             </div>
//           }
//         />
//         )}  
//         </nav>

//     )
// }

export default Nav;