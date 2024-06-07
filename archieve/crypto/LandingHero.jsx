import { useEffect } from 'react';

export default function LandingHero() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "interval": "1m",
        "width": 425,
        "isTransparent": true,
        "height": 450,
        "symbol": "BINANCE:BTCUSDT",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "en",
        "colorTheme": "light"
      });
  
      document.getElementsByClassName('tradingview-widget-container__widget landing-hero')[0].appendChild(script);
  
      return () => {
        document.getElementsByClassName('tradingview-widget-container__widget landing-hero')[0].removeChild(script);
      };
    }, []);
  
    return (
      <div className="landing-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Explore Real-time Cryptocurrency Price.</h2>
              <p>Discover the latest trends and prices in the cryptocurrency market. Our platform provides real-time data, advanced charts, and a secure trading experience.</p>
            </div>
            <div className="offset-md-1 col-md-5">
              <div className="tradingview-widget-container tradingview-tecnical-analys">
                <div className="tradingview-widget-container ">
                  <div className="tradingview-widget-container__widget landing-hero"></div>
                  <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  