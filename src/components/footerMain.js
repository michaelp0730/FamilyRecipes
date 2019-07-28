import React from 'react'
let date = new Date();

const FooterMain = () => {
    return (
      <div className="App">
        <footer className="footer-main">
          {'Copyright 2011 - ' + date.getFullYear() + ' PellegriniPage.com | All Rights Reserved'}
        </footer>
      </div>
    );
};

export default FooterMain;
