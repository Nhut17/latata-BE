import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
          <BrowserRouter>
            
         
                  <Header {...props} />
                  
                   
                      <Routes />
                    
           

                  <Footer />
        
            
    
          </BrowserRouter>
      
  );
};

export default Layout;
