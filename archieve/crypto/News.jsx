import { useEffect } from 'react';

export default function News() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify( {
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "compact",
            "width": "100%",
            "height": 430,
            "locale": "en"
        });

        document.getElementsByClassName('tradingview-widget-container__widget news')[0].appendChild(script);

        return () => {
            document.getElementsByClassName('tradingview-widget-container__widget news')[0].removeChild(script);
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
                        <div className="tradingview-widget-container news">
                            <div className="tradingview-widget-container__widget news"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}
