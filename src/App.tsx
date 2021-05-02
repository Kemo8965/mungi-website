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
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Agriculture from './pages/Agriculture';
import Construction from './pages/Construction';
import WelpAutoSec from './pages/WelpAutoSec';
import Trade from './pages/Trade';
import ZraCertificate from './components/Certificates/zra';
import PacraCertificate from './components/Certificates/pacra';
import NapsaCertificate from './components/Certificates/napsa';
import ZppaCertificate from './components/Certificates/zppa';


function App() {
  return (
    <Router>
       <div className="App">

      <NewSidebar/>

      <Switch>
      <Route path="/" exact component={NewHeader}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/certificates" component={Certificates}/>
      <Route path="/terms-of-service" component={TermsOfService}/>
      <Route path="/privacy-policy" component={PrivacyPolicy}/>
      <Route path="/agriculture" component={Agriculture}/>
      <Route path="/construction" component={Construction}/>
      <Route path="/welp-automotive-security" component={WelpAutoSec}/>
      <Route path="/trade" component={Trade}/>

      <Route path="/zra" component={ZraCertificate}/>
      <Route path="/pacra" component={PacraCertificate}/>
      <Route path="/napsa" component={NapsaCertificate}/>
      <Route path="/zppa" component={ZppaCertificate}/>
     
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
