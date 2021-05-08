import {NavLink} from 'react-router-dom';
const Nav = () => {
    return(
       <nav className="nav-section">
           <div className="nav">
               <div className="logo">
                   <img src="/assets/images/augurlogo.png" alt="Augur Tips Logo"/>
               </div>
               <div className="nav-links">
                   <ul>
                       <li><NavLink exact to="/" activeClassName="main-nav-active" > Home</NavLink></li>
                       <li><NavLink exact to="/football-tips" activeClassName="main-nav-active"> Football Tips</NavLink></li>
                       <li><NavLink exact to="/predictions" activeClassName="main-nav-active">Predictions</NavLink></li>
                       <li><NavLink exact to="/sport-tips" activeClassName="main-nav-active">Sports Tips</NavLink></li>
                   </ul>
               </div>
           </div>
       </nav>
    )
}

export default Nav;