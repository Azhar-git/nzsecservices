import React from 'react';
// import logo from './logo.svg';
import 'tachyons';
import Particles from 'react-particles-js';
import './index.css';
// import { Slide } from 'react-slideshow-image';
import Slideshow from './slides';
import Tilt from 'react-tilt';


// const particlesOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5,
        
//       }
//     }
//   }
// }


const particlesOptions = {
  particles: {
    number: {
      value:100,
      density: {
        enable: true
      }
    }
    
  }
}



class App extends React.Component {
  render() {
    return (

      <div id="main">
        <Particles className="particles"
          params={particlesOptions}/>
        {/* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link> */}
        
        <header id="pageHeader" className="gold" style={{backgroundColor: "#357edd"}}>

          <div className="inlines mt0">
            <Tilt className="Tilt br1 shadow-1" options={{ max: 100 }} style={{ height: 40, width: 50 }} >
              <div className="Tilt-inner pa2">
                <img style={{paddingBottom: '5px'}} alt='logo' src={require("./img/Logo2.jpeg")}/>
              </div>
            </Tilt>
          </div>

          <div className="inlines"><a href="https://azhar-git.github.io/nzsecservices">Home</a></div>
          <div className="inlines">Services</div>
          <div className="inlines">Announcements</div>
          <div className="push">Contacts</div>
        </header>

        <article id="mainArticle">
        <h1 className="calisto navy" style={{textAlign: "center", textTransform: "uppercase"}}>NZ Security Services</h1>
        <p className="f4 athelas" style={{textAlign: "center", textTransform: "uppercase"}}>Security and Allied Services</p>
          <div><Slideshow /></div>
          <p>We are your one-stop-shop solution for all your security needs.
           Our aim is to create a protected environment for you, wherever you are.
        </p>

        </article>
        <nav id="mainNav">About</nav>
        <div id="siteAds">Latest Information</div>
        <div id="comaddress">Office Address: Bengaluru, Karnataka<p>Phone: +91-8399071379</p></div>
        <footer id="pageFooter"><address><a href="mailto: azhar.mozumder2@gmail.com?subject=Feedback">Design & Development by Azhar</a></address></footer>
      </div>

    );
  }
}
export default App;
