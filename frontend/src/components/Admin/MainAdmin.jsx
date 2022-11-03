import React from "react";
import { useSelector } from "react-redux";
import "./MainAdmin.css";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from './components/Routes'
import Sidebar from "./components/sidebar/Sidebar";
// import Routes from "../../routes/Routes";

function MainAdmin (props) {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, error } = userSignin;
  // const history = useHistory();

  // if (!userInfo || !userInfo.isAdmin) {
  //   history.push('/')
  // }

  return (
    // <Router>
    //   <Route
    //     render={(props) => (
    //       <div className={`layout`}>
    //         <Sidebar />
    //         <div className="layout__content">

    //           <div className="layout__content-main">
                
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   ></Route>
    // </Router>

    <BrowserRouter>
            
      <Route
        render={(props) => (
          <div className={`layout`}>
            <Sidebar {...props}/>

            <div className="layout__content">
              <div className="layout__content-main">
                  <Routes/>
              </div>
            </div>
          </div>

        )}
      />
  </BrowserRouter>
    
  );
}

export default MainAdmin;
