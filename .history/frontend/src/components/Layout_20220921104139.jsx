import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
          <BrowserRouter>
            
            <Route
              render={(props) => (
                <div>
                  <Header {...props} />
                  
                   
                      <Routes />
                    
           

                  <Footer />
                </div>
              )}
            />
          </BrowserRouter>
      
  );
};

export default Layout;
