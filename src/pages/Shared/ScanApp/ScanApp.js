import React from 'react';
import './ScanApp.css';
import qrLogo from '../../../assets/icons/qr-code-scan23.a26d7f4.png';
import appLogo from '../../../assets/icons/app-store-logo.a63e95b.svg';
import googlePlayLogo from '../../../assets/icons/google-play-logo.09cc067.svg';
import hireCT from '../../../assets/images/download-hirect-img.4251287.png';


const ScanApp = () => {
    return (
        <section className="scan-app-section">
        <div className="scan-app">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="acan-code">
                  <h2>Scan &amp; Download the App!</h2>
                  <p>
                    Open the camera on your phone and scan the QR code<br />below
                    to download the App.
                  </p>
                  <ul className="app-scan-button">
                    <li>
                      <a
                        ><img
                          id="download-hirect-qrcode"
                          src={qrLogo}
                          alt=""
                          className="qr-code-img"
                      /></a>
                    </li>
                    <li>
                      <a
                        href="https://apps.apple.com/US/app/id1518442417?mt=8"
                        target="_blank"
                        ><img
                          src={appLogo}
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a
                        href="https://hirectin.onelink.me/TwhD/b0fe8b20"
                        target="_blank"
                        ><img
                          src={googlePlayLogo}
                          alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="app-scan-img">
                  <div className="downloads-stamp">
                    <span className="download-count">8M+</span>
                    <span className="download-text">Downloads</span>
                  </div>
                  <img
                    src={hireCT}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ScanApp;