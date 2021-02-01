// import "@babel/polyfill";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDom from "react-dom";
import App from './App';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

(function (win, doc, standardWidth) {
    function resizeBaseFontSize() {
        const { clientWidth, offsetWidth } = doc.documentElement;
        const { clientWidth: bodyClientWidth, offsetWidth: bodyOffsetWidth } = doc.body;
        const { width: screenWidth, availWidth } = win.screen;
        const width = clientWidth || bodyClientWidth || offsetWidth || bodyOffsetWidth || screenWidth
          || availWidth || standardWidth;
        doc.documentElement.style.fontSize = `${(width / standardWidth) * 10}px`;
        doc.documentElement.style.opacity = '1';
    }
    win.addEventListener('load', resizeBaseFontSize);
    win.addEventListener('resize', resizeBaseFontSize);
    win.addEventListener('orientationchange', resizeBaseFontSize);
})(window, document, 375);
