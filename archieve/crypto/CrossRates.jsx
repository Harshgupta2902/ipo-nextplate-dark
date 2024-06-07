import { useEffect } from 'react';

export default function CrossRates() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
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

        document.getElementsByClassName('tradingview-widget-container__widget crossRates')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget crossRates')[0].removeChild(script);
        };
    }, []);

    return (
        <div className="landing-feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Check fiat currency cross rates <br /> within a second</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="tradingview-widget-container crossRates">
                            <div className="tradingview-widget-container__widget crossRates"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}
