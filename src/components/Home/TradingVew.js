// TradingViewWidget.jsx
import { GlobalContext } from '@/context/context';
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const { symbol, dex} = GlobalContext()
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = 
        {
          "autosize": true,
          "symbol": ``,
          "interval": "180",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "gridColor": "rgba(152, 152, 152, 0.06)",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        };
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      
    </div>
  );
}

export default memo(TradingViewWidget);
