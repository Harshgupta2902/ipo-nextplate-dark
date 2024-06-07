import { useEffect } from 'react';

export default function HeatMap() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": 400,
            "currencies": [
                "EUR",
                "USD",
                "JPY",
                "GBP",
                "CHF",
                "AUD",
                "CAD",
                "NZD",
                "CNY"
            ],
            "isTransparent": false,
            "colorTheme": "dark",
            "locale": "en"
        });

        document.getElementsByClassName('tradingview-widget-container__widget heat-map')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget heat-map')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="landing-feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Check latest news and key events of popular <br /> companies and cryptocurrencies</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="tradingview-widget-container heat-map">
                            <div className="tradingview-widget-container__widget heat-map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}
