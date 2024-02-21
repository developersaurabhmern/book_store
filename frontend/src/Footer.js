import React from "react";

const Footer = () => {
  return (
    <>
    <style>
    {`
    @media(max-width:480px){
      .quick-links li{
        margin-left:0px!important
      }
      .Phonewidthlinks ul{
        margin-bottom:0!important;
      }
      #footer ul.quick-links li{
        font-size:12px!important;
      }
      .Phonewidthlinks{
        margin-bottom:0px!important;
      }
      #footer h5{
        font-size:11px;
        margin-bottom:0px;
      }
    }
    @media screen and (max-width: 600px) {
    .marketing { display: flex; flex-flow: column; }

    .two { order: 3; }
    .one { order: 1; }
    .three { order: 2; }
    .four { order: 4;}
    }
    `}
    </style>
     
     <section id="footer" className="section-footer">
          <div className="container">
            <div className="row  text-xs-center text-sm-left text-md-left">           
                <div className="col-md-2 col-6 one">
                <h5><span className="mr-2">|</span> Our Services</h5>
                  <ul className="list-unstyled quick-links">
                  <li><a href="https://bfcpublications.com/editorial-services"><i className="fa fa-angle-double-right" />Editorial Services</a></li>
                  <li><a href="https://bfcpublications.com/designing-services"><i className="fa fa-angle-double-right" />Designing Services</a></li>
                  <li><a href="https://bfcpublications.com/marketing-services"><i className="fa fa-angle-double-right" />Marketing Services</a></li>
                  <li><a href="https://bfcpublications.com/distribution-services"><i className="fa fa-angle-double-right" />Distribution Services</a></li>
                  <li><a href="https://bfcpublications.com/author-support"><i className="fa fa-angle-double-right" />Author Support</a></li>
               </ul>
                  </div>

                  <div className="col-md-4 col-6 two">
                  <h5 className="text-center mr-5"><span className="mr-2">|</span> Quick links</h5>
                    <div className="row">
                      <div className="col-md-6 col-12 Phonewidthlinks">
                        <ul className="list-unstyled quick-links">
                          <li className="ml-5"><a href="https://bfcpublications.com/index"><i className="fa fa-angle-double-right" />Home</a></li>
                          <li className="ml-5"><a href="https://bfcpublications.com/about"><i className="fa fa-angle-double-right" />About Us</a></li>
                          <li className="ml-5"><a href="https://bfcpublications.com/packages"><i className="fa fa-angle-double-right" />Packages</a></li>
                          <li className="ml-5"><a href="https://bfcpublications.com/services"><i className="fa fa-angle-double-right" />Services</a></li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-12 mb-3">
                        <ul className="list-unstyled quick-links">
                          <li><a href="https://bfcpublications.com/royalty-calculator"><i className="fa fa-angle-double-right" />Royalty Calculator</a></li>
                        <li><a href="https://bfcpublications.com/login"><i className="fa fa-angle-double-right" />Author Dashboard</a></li>
                        <li><a href="https://bfcpublications.com/contact"><i className="fa fa-angle-double-right" />Contact Us</a></li>
                        <li><a href="https://bfcpublications.com/faq"><i className="fa fa-angle-double-right" />FAQs</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  

              <div className="col-md-3 col-6 mb-3 three">
              <h5><span className="mr-2">|</span> Legal</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="https://bfcpublications.com/terms-and-condition"><i className="fa fa-angle-double-right" /> Terms and Conditions</a></li>
                  <li><a href="https://bfcpublications.com/privacy-policy"><i className="fa fa-angle-double-right" /> Privacy Policy</a></li>
                  <li><a href="https://bfcpublications.com/legal-disclaimer"><i className="fa fa-angle-double-right" /> Legal Disclaimer</a></li>
                  <li><a href="https://bfcpublications.com/refund-and-cancellation-policy"><i className="fa fa-angle-double-right" /> Refund and Cancellation Policy</a></li>
                </ul>
              </div>

              <div className="col-md-3 col-6 four">
              <h5><span className="mr-2">|</span> Office Address</h5>
                <ul className="list-unstyled quick-links">
                  <li className="mb-1"><a href="https://www.google.com/maps/place/BFC+Publications+Private+Limited/@26.8521018,81.0228148,15z/data=!4m5!3m4!1s0x0:0x91ec369254659c77!8m2!3d26.8521018!4d81.0228148" target="_blank">
                  <ul className="list-unstyled">
                    <li><i className="fa fa-map-marker mr-2" />BFC Publications Pvt Ltd,</li>
                    <li>CP-61, Viraj Khand, Gomti Nagar,</li>
                    <li>Lucknow, Uttar Pradesh 226010</li>
                  </ul>
                  </a>
                  </li>
                  <li className="mb-1"><a href="tel:05223514141"><i className="fa fa-phone mr-2" /> +915223514141 </a> </li>
                  <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@bfcpublications.com&body=BODY&tf=1"><i className="fa fa-envelope mr-2 text-white" /> support@bfcpublications.com </a></li>
                </ul>
              </div>
            </div>
<br/>
<hr />
<div className="col-md-12">
          <p className="para text-light text-justify" style={{fontSize: '14px'}}>
                Since its inception, BFC Publications has been fast gaining mileage over other online self publishing 
                platforms. If online comparisons are to be believed, even the most prominent publishing houses across
                 India have been struggling to match the prices we offer, primarily owing to the reasonability of our 
                 packages. This, coupled with our persistance to ensure unmatched quality and time-bound delivery, has
                  propelled us as one  of India’s most trusted online publishing platforms. Our team of experts leaves 
                  no stone unturned to fine-comb errors in manuscripts, and interpret the author’s imagination the way 
                  it was originally envisioned. No matter who you are, a first-timer starting to write a book, or a 
                  seasoned author,  if you are looking  to publish a book, BFC Publications is where 
                  you’d like to be. 
                </p>
        </div>
            <hr/>
            <div className="row">
<div className="col-md-6 col-12 footer-rights  one">
<span className="h6 text-white">© All Rights Reserved.<a className="ml-2" href="home" target="_blank">BFC Publications</a></span>
</div>
<div className="col-md-6 col-12 footer-social two mb-3 social text-right">
<ul className="list-unstyled list-inline social">
<li className="list-inline-item"><a href="https://www.facebook.com/BFC-Publications-663170264296179" target="_blank"><i className="fa fa-facebook"></i></a></li>
<li className="list-inline-item"><a href="https://twitter.com/BfcPublications" target="_blank"><i className="fa fa-twitter" /></a></li>
<li className="list-inline-item"><a href="https://www.instagram.com/bfc_publications/"><i className="fa fa-instagram" target="_blank" /></a></li>
<li className="list-inline-item"><a href="https://www.linkedin.com/company/bfc-publications/ " target="_blank"><i className="fa fa-linkedin" /></a></li>
<li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@bfcpublications.com&body=BODY&tf=1" target="_blank"><i className="fa fa-envelope" /></a></li>
</ul>
</div>
<hr />
</div>	
            {/* <div className="row">
<div className="col-md-6 col-12 footer-rights  one">
<span className="h6 text-white">© All Rights Reserved.<a className="ml-2" href="home" target="_blank">BFC Publications</a></span>
</div>
<div className="col-md-6 col-12 footer-social two mb-3">
<ul className="list-unstyled list-inline social text-right">
<li className="list-inline-item"><a href="https://www.facebook.com/BFC-Publications-663170264296179" target="_blank"><i className="fa fa-facebook"></i></a></li>
<li className="list-inline-item"><a href="https://twitter.com/BfcPublications" target="_blank"><i className="fa fa-twitter" /></a></li>
<li className="list-inline-item"><a href="https://www.instagram.com/bfc_publications/"><i className="fa fa-instagram" target="_blank" /></a></li>
<li className="list-inline-item"><a href="https://www.linkedin.com/company/bfc-publications/ " target="_blank"><i className="fa fa-linkedin" /></a></li>
<li className="list-inline-item"><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@bfcpublications.com&body=BODY&tf=1" target="_blank"><i className="fa fa-envelope" /></a></li>
</ul>
</div>
<hr />
</div>	 */}
          </div>
        </section>
    </>
  );
};

export default Footer;


