import React from 'react';
import "./footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    const handleRefreshClick = () => {
        window.location.reload();
    };

  return (
    <footer className="footer">
        <div className="footer-container grid">
            <div className="footer-item">
                    <div className="heading">
                        <h1 className='foot-h1'>Jello</h1>
                    </div>
                    <div className="content1">
                        <div className="info-1">
                            <h2 className="foot">CATEGORY</h2>
                            <p className="foot-p">WOMEN</p>
                            <p className="foot-p">MEN</p>
                            <p className="foot-p">Electronics</p>
                        </div>
                        <div className="info-2">
                            <h2 className="foot">LEGAL</h2>
                            <p className="foot-p">Privacy Policy</p>
                            <p className="foot-p">Terms of Service</p>
                            <p className="foot-p">Cooking Policy</p>
                            <p className="foot-p">Sitemap</p>
                        </div>
                    </div>
            </div>
            <p className="footer__copy">© Copyright {currentYear}. Made by <span onClick={handleRefreshClick}>Aman Mishra</span></p>
        </div>
    </footer>
  )
}
export default Footer