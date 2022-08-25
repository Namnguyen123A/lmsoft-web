import * as React from 'react';
import "./main.scss";
export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="left">
            <div className="footer-columns">
              <div className="column">
                <ul>
                  <div className="column-top">Company</div>
                  
                  <li className="footer-item">
                    <a href="">Home</a>
                  </li>
                  
                  <li className="footer-item">
                    <a href="">Cases</a>
                  </li>

                  <li className="footer-item">
                    <a href="">About Us</a>
                  </li>
                  
                  <li className="footer-item">
                    <a href="">Blog</a>
                  </li>
                  
                  <li className="footer-item">
                    <a href="">Sitemap</a>
                  </li>
                  
                </ul>
              </div>

              <div className="column">
                <ul>
                  <div className="column-top">Services</div>
                  <li className="footer-item"><a href="">Mobile App</a></li>
                  <li className="footer-item"><a href="">Web Design</a></li>
                  <li className="footer-item"><a href="">UX/UI Design</a></li>
                  <li className="footer-item"><a href="">Software Testing</a></li>
                </ul>
              </div>

              <div className="column">
                <ul>
                  <div className="column-top">TECHNOLOGIES</div>
                  <li className="footer-item"><a href="">React.js</a></li>
                  <li className="footer-item"><a href="">Python</a></li>
                  <li className="footer-item"><a href="">PHP Laravel</a></li>
                  <li className="footer-item"><a href="">Node.js</a></li>
                  <li className="footer-item"><a href="">ASP.NET</a></li>
                  <li className="footer-item"><a href="">Flutter</a></li>
                  <li className="footer-item"><a href="">Vue.js</a></li>
                </ul>
              </div>
            </div>
          </div>
        
            <div className="right">
              <div className="contacts">
                <address>
                  <p>1295 Tadsworth Terrace #5330, Lake Mary, FL 32746, United States</p>
                  <p>Kaupmehe tn 7-120, 10114, Kesklinna linnaosa, Harju maakond, Tallinn, Estonia</p>
                </address>

                <div className="contact-email">
                  <a href="">biz@riseapps.biz</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="bottom-left"></div>
              <div className="bottom-right">
                <p className="copy">2022 © Riseapps. All rights reserved.</p>
                <p><a href="" className="privacy-link" target="_self">Privacy Policy</a></p>
            </div>
          </div>

      </div>
    </footer>
  );
}
