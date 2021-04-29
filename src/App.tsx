import React from 'react';


import "tailwindcss/tailwind.css"
import NewSidebar from './components/NewSidebar'
import NewHeader from './pages/NewHeader'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from 'react-scroll-up'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Certificates from './components/Certificates';


function App() {
  return (
    <Router>
       <div className="App font-sans">

      <NewSidebar/>

      <Switch>
      <Route path="/" exact component={NewHeader}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Certificates" component={Certificates}/>
     
      </Switch>
      <Footer/>
    </div>
    <ScrollToTop  style={{position: 'fixed',
                           bottom: 60,
                          right: 40,
                        
                           cursor: 'pointer',
                          transitionDuration: '0.6s',
                           transitionTimingFunction: 'linear',
                          transitionDelay: '.5s'}} showUnder={165}>
           <span >
             <svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-800" 
              viewBox="0 0 20 20"
               fill="currentColor">
          <path fill-rule="evenodd"
           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" 
           clip-rule="evenodd" />
          </svg>
          </span>
      </ScrollToTop>
    </Router>
   
  );
}

export default App;
