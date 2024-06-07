import React, { useEffect } from 'react';

export default function TickerTape() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "description": "",
                    "proName": "BINANCE:BTCUSDT"
                },
                {
                    "description": "",
                    "proName": "BITSTAMP:BTCUSD"
                },
                {
                    "description": "",
                    "proName": "OANDA:XAUUSD"
                },
                {
                    "description": "",
                    "proName": "CRYPTOCAP:USDT"
                },
                {
                    "description": "",
                    "proName": "BITSTAMP:ETHUSD"
                },
                {
                    "description": "",
                    "proName": "CRYPTOCAP:DOGE"
                }
            ],
            "showSymbolLogo": true,
            "isTransparent": true,
            "displayMode": "regular",
            "colorTheme": "dark",
            "locale": "en"
        });

        const widgetContainer = document.getElementsByClassName('tradingview-widget-container__widget ticker-tape')[0];
        if (widgetContainer) {
            widgetContainer.appendChild(script);
        }

        return () => {
            if (widgetContainer && script.parentNode === widgetContainer) {
                widgetContainer.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container__widget ticker-tape"></div>
    );
}
