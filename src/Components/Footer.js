import React from "react"

import 'font-awesome/css/font-awesome.min.css';
const Footer  = () => {
    return(
        <div>
  <footer>
    <div className="container pt-5 border-bottom">
      <div className="row">
        <div className="col-md-3 col-sm-12 mb-3 ">
          <h4 id="app">Get the app &nbsp;<i className="fa fa-apple" /></h4>
          <br />
          <br />
          <h4 id="app">Follow US</h4> &nbsp;<i className="fa fa-twitter fa-2x" />&nbsp;&nbsp;&nbsp;<i className="fa fa-facebook-f fa-2x" />&nbsp;&nbsp;&nbsp;<i className="fa fa-instagram fa-2x" />
          <br />
          <br />
          <h4 id="app">Get Inspiration &nbsp;</h4>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <span className="input-group-text" id="idbtn">SUBMIT</span>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <div className="col-md-3 col-sm-6 col-6 p-0  mb-2 float-right">
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../about-naologic.html">TERMS OF SERVICES</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://blog.naologic.com"> PRIVACY  POLICY</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://blog.naologic.com"> ACCESSIBILITY</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://blog.naologic.com"> SITE MAP</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-6 p-0 mb-3 float-right">
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://github.com/naologic">FAQS</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://stackshare.io/naologic">FOR BUSINESS</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://stackshare.io/naologic">COMPANY</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://stackshare.io/naologic">CAREERS</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mb-3 p-0 float-right">
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../about-naologic.html">ABOUT US</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://blog.naologic.com"> GIFT CARD</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="https://blog.naologic.com"> CONTACT US</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-right">
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../sales/sales-performance-market-pipeline.html">HOW IT WORKS</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../project-management/project-management.html">PRESS</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../workforce/workforce-organization-management-hr.html">FOR ART &amp; TRADE</a></li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../e-commerce/e-commerce.html">tHE SHOP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* subscribe part end */}
  {/*::footer_part start::*/}
  <footer className="footer_part">
    <div className="copyright_part">
      <div className="container" id="copycontainer">
        <div className="row ">
          <div className="col-lg-12">
            <div className="text-center">
              <p className="text-center" id="copy">©2020 Index</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Footer;