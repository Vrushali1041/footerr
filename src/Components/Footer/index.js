import React from "react";
import "./style.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="row"> */}
        <div className="text-light heading" >
          <h5>Sankhyana Consultancy Services Pvt. Ltd</h5>
          <p>THE BEST YOU GET, THE BEST WE OFFER</p>

          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          
          <p>Contacts</p>
          <div>
            <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-regular fa-envelope"></i></span> www.sankhyana.com</p>
            <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-solid fa-phone"></i></span> +91 9591295524</p>
          </div>
        </div>

        <div className="text-light heading" >
          <h5 className="link-heading"> Quick Links</h5>
          <ul className="footer-links">
            <li className="footer-item" >
              <a className="links" href="/">Home</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">About Us</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">Training</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">Consultancy</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">Analytics</a>
            </li>
          </ul>
        </div>

        <div className="text-light heading">
          <h5 className="link-heading">Useful Links</h5>
          <ul className="footer-links" >
            <li className="footer-item" >
              <a className="links" href="/">Training</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">Analytics</a>
            </li>
            <li className="footer-item" >
              <a className="links" href="/">Connecting</a>
            </li>
            <li className="footer-item" style={{ paddingBottom: '1rem' }}>
              <a className="links" href="/">Help</a>
            </li>
          </ul>
        </div>

        <div className="text-light heading">
          <h5>Location</h5>
          <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-solid fa-house"></i></span> Bengaluru - #1678 HDFC ATM, Near Kullappa Circle Kammanahalli, Bengaluru(Kammanahalli 560084).</p>
          <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-solid fa-house"></i></span> Bengaluru - #1188,HNRT Tower, Near Parangitpalya Bus Stop Above Udupi Palace HSR Layout, Bengaluru(Kammanahalli 560102) </p>
          <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-solid fa-house"></i></span> Kenya - View Park Towers, 9 & 10, Utali Lane, CBD, Nairobi,Kenya</p>
          <p><span style={{ paddingRight: '0.5rem' }}><i class="fa-solid fa-house"></i></span> Bihar - Amber Hotel, Dehri-On-Sone, Near Station Rd.(821305)</p>
        </div>
        {/* </div> */}
      </div>

      <div className=" bg-dark text-center text-light" style={{ height: '35px' }}>2020 CopyrightSankhyana.com</div>
      <img src="pharmax.png" />
      <img src="icici.png" />
      <img src="rakuten.png" />
    </footer>
    
  )
}

export default Footer;









// style={{ paddingBottom: '1rem' }}