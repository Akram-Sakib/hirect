import React from 'react';
import './HireChat.css';
import chat from '../../../assets/images/chat-directly-new.558e07e.png'
import hire from '../../../assets/images/hire-direct-hirect-new.ea598ac.png'

const HireChat = () => {
    return (
        <section className="hire-chat-section">
        <div className="hire-chat">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="hire-now">
                  <h2>Chat Directly With <br />Candidates &amp; Hire Now</h2>
                  <a href="/connect" className="btn default-btn button-sm"
                    >Get Connected</a
                  >
                </div>
              </div>
              <div className="col-md-7">
                <div className="hire-now-img">
                  <img
                    src={chat}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hire-chat">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="hire-now-img">
                  <img
                    src={hire}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="hire-now">
                  <h2>Hire Direct <br /></h2>
                  <p>
                    AI Algorithm: The app connects 150K+ verified Startups with
                    3M+ verified and relevant Job seekers!
                  </p>
                  <a href="/connect" className="btn default-btn button-sm"
                    >Instant Hiring</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HireChat;