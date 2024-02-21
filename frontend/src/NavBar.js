import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { signout } from "./actions/userActions";
import SearchBox from "./components/SearchBox";
import logofront from "./images/bfc-publications-logo.png"


// const pii=27722;

const NavBar = (props) => {

  const cart = useSelector((state) => state.cart);
  // const [namenav, setNamenav] = useState('');

  // console.log("namenavvvvvvvvvvvvvv",namenav);

  const { cartItems } = cart;
  const dispatch=useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const userSignin=useSelector(state =>state.userSignin)
   const {userInfo} = userSignin;
  return (
    <>
   <style jsx>
    {`
    .cart-item span{
      background: #fbf40b;
      border: 1px solid;
      border-radius: 50%;
      padding: 2px;
      padding: 0.25em 0.4em;
      font-size: 79%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      margin-left: -16px!important;
    }
    @media(max-width:480px){
      .cart-item{
      top: 0px
    right: 140px;
    }
    }
    `}
    </style>
      <section className="navTop">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        <div className="container">
        {userInfo ? (
            <div className="btn-login mr-3 btn-user dropdown store-mobile-none">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                    {userInfo.name}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item"><i className="fa fa-user mr-3" />My Profile</NavLink>
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item" onClick={signoutHandler}><i className="fa fa-sign-out mr-3"></i>Logout</NavLink>
                  </div>
                </div>
                ) :
                  ( <NavLink activeClassName="menuActive"
                  className="nav-link"
                  exact
                  to="/signin" className="btn mr-3 btn-primary btn-top ss-login text-white store-mobile-none mobile-login-btn" >Login</NavLink> )
                }
          <a className="navbar-brand" href="/">
            <img src={logofront} alt="" className="mobile-logo img-fluid"/>
          </a>
          {/* <NavLink
                activeClassName="menuActive"
                className="nav-link store-mobile-none"
                exact
                to="/Cart" className="btn ml-2 mr-3 btn-top btn-login btn-cart"><i className="fa fa-shopping-cart store-mobile-none" /></NavLink> */}
                <a
                activeClassName="menuActive"
                className="nav-link store-mobile-none"
                exact
                href="/Cart" className="btn ml-2 mr-3 btn-top btn-login btn-cart"><i className="fa fa-shopping-cart store-mobile-none" /></a>
                  {cartItems.length > 0 && (
              <span className="badge cart-item-mobile store-mobile-none">{cartItems.length}</span>
            )}
            <button className="navbar-toggler store-web-display" type="button" data-trigger="#main_nav">
              <span className="navbar-toggler-icon" />
            </button>
            
            <div className="col-xl-7 col-xs-12 p-0  header_search_bar store-mobile-none">
              <div>
                <Route
                  render={({ history }) => (
                    <SearchBox history={history} ></SearchBox> 
                  )}
                ></Route>
              </div>
              <div className="search_suggesation">
                <div className="list-group" id="suggestion-bar">
                </div>
              </div>
            </div>
          <div className="navbar-collapse" id="main_nav">
            <div className="offcanvas-header mt-3">
              <h5 className="py-2 text-white">
                <span className="btn-close close_btn"><i className="fa fa-arrow-left" /></span>
                <img src={logofront} />
              </h5>
            </div>
            <ul className="navbar-nav custom-cat-drop ml-auto mr-4">
            </ul>
            <div className="col-xl-7 col-xs-12 p-0  header_search_bar">
              {/* <form action="#" method="post" id="post">           
                <input type="text" className="form-control" name="search" placeholder="Search by Book Title or Author Name" id="search-bar" autoComplete="off" required />
              </form> */}

              <div>
                          <Route
                            render={({ history }) => (
                              // <SearchBox onChange={evalue=>setNamenav(evalue)}  ></SearchBox> 

                              <SearchBox history={history} ></SearchBox> 
                            )}
                          ></Route>
                          
                        </div>

              <div className="search_suggesation">
                <div className="list-group" id="suggestion-bar">
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto ss-nav-left">
              <li className="nav-item d-flex align-items-center">
                {/* <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Signup" className="btn mr-3 btn-top btn-login btn-default">Sign Up</NavLink>  */}
                {userInfo ? (

                  <div className="btn-login mr-3 btn-user dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {userInfo.name}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item"><i className="fa fa-user mr-3" />My Profile</NavLink>
                    {/* <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Myorder" className="dropdown-item"><i className="fa fa-shopping-cart mr-3" />My Order</NavLink> */}
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item" onClick={signoutHandler}><i className="fa fa-sign-out mr-3"></i>Logout</NavLink>
                  </div>
                  </div>
              // <div className="dropdown">
              //   <Link to="#">
              //     {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              //   </Link>
              //   <ul className="dropdown-content">
              //     <li>
              //       <Link to="#signout" onClick={signoutHandler}>
              //         Logout
              //       </Link>
              //     </li>
              //   </ul>
              // </div>
            ) :
                  ( <NavLink activeClassName="menuActive"
                  className="nav-link"
                  exact
                  to="/signin" className="btn mr-3 btn-primary btn-top ss-login text-white" >Login</NavLink> )
                  
                
                }

               
                {/* <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Cart" className="btn ml-2 mr-3 btn-top btn-login btn-cart"><i className="fa fa-shopping-cart" /></NavLink> */}
                    <a
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    href="/Cart" className="btn ml-2 mr-3 btn-top btn-login btn-cart"><i className="fa fa-shopping-cart" /></a>
                     {cartItems.length > 0 && (
                <sup className="cart-item"><span>{cartItems.length}</span></sup>
              )}
                {/* <div className="btn-login mr-3 btn-user dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user" />
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Profile" className="dropdown-item"><i className="fa fa-user mr-3" />My Profile</NavLink>
                    <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/Myorder" className="dropdown-item"><i className="fa fa-shopping-cart mr-3" />My Order</NavLink>
                  </div>
                </div> */}
              </li>
            </ul>
          </div>
          {/* navbar-collapse.// */}
        </div>
      </nav>
      </section>
    </>
  );
};

export default NavBar;

