import Logo from "./Final.png";

import React from "react";

function About(props) {
  return (
    <div className="about-container">
      <p>
        <div className="about-header">
          {" "}
          <div>
            {" "}
            <h1 className="about-h1">Welcome to TriFle! 😃</h1>
            <h2>We're happy you're here For your Financial Freedom! </h2>
          </div>
          <img className="about-logo" src={Logo} alt="LOGO" />
        </div>

        <div className="img-li">
          <img
            className="giphy"
            src="https://media2.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif?cid=ecf05e47nonrpj4j8vsxcspwsta0h3ig3exbifhi8gjffnau&rid=giphy.gif&ct=g"
            alt="giphy"
          />
          <div className="paragraphs">
            <div className="about-ul">Did you know? </div>
            <div className="li-one">
              <span className="triangle">▲</span> The stock market is more than
              400 years old and is 70% likely to go up on any year.
            </div>
            <div className="li-two">
              <span className="triangle">▲</span> 55% of US adults have money in
              the stock market.
            </div>
            <div className="li-three">
              <span className="triangle">▲</span> Total market capitalization
              reached a record $95 trillion in 2020.
            </div>

            <p className="about-detail-two">
              So, it's a good way to make money but, it doesn't mean you always
              make money for 100% sure. That's why we are here to help you on
              your decision. We hope you all end up with accomplishing your
              Financial Freedom by navigating this site!
            </p>
          </div>
        </div>
        <div className="about-detail">
          You will notice that everyone arounds you talks about Stock market
          these days. Not only stocks help individuals and/or organizations to
          make profit, but also allow people to comprehend how the economy
          works. Even though you don't know about the economy, sometimes
          watching a stock which fluctuates every second is fun itself! TriFle
          (For your Financial Freedom) is a stock tracking app, that is for
          people who want to manage their own stock portfolio and see the most
          recent news regarding the stock market. Users can easily visualize
          about the trendy stocks and find all the details about the company
          including the stock price changes by one click.{" "}
        </div>
      </p>
    </div>
  );
}

export default About;
