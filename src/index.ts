import "@babel/polyfill";
import App from './App';

const rootEle: HTMLElement|null = document.getElementById('root');
if (rootEle) {
    rootEle.innerHTML = App;
}


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
