
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CoinPriceWidget = ({ symbol, containerClassName }) => {

    const router = useRouter();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol,
            width: "100%",
            height: 220,
            locale: "en",
            dateRange: "12M",
            colorTheme: "dark",
            trendLineColor: "rgba(41, 98, 255, 1)",
            underLineColor: "rgba(41, 98, 255, 0.3)",
            underLineBottomColor: "rgba(41, 98, 255, 0)",
            isTransparent: false,
            autosize: false,
            // largeChartUrl: `/crypto/${symbol}`
        });

        const container = document.querySelector(`.${containerClassName}`);
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, [symbol, containerClassName]);

    return (
        <div className={`tradingview-widget-container ${containerClassName}`} />
    );
};

export default function GlancePrice() {
    return (
        <div className="landing-feature landing-coin-price bt-none">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Check your favorite coin price <br /> within a glance</h2>
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:BTCUSD" containerClassName="btc-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:ETHUSDT" containerClassName="eth-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:XRPUSDT" containerClassName="xrp-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:BNBUSDT" containerClassName="bnb-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:ADAUSDT" containerClassName="ada-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:DOGEUSDT" containerClassName="doge-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:DOTUSDT" containerClassName="dusdt-price-widget" />
                    </div>
                    <div className="col-md-3 mb30">
                        <CoinPriceWidget symbol="BINANCE:SOLUSDT" containerClassName="susdt-price-widget" />
                    </div>

                </div>
            </div>
        </div>
    );
};

