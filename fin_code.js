!function(){
  var e = document.createElement("script");
  e.src = "https://co-in.io/widget/pricelist.js?items=BTC%2CETH%2CLTC%2CUSDT";
  e.async = true;

  function initializeWidget() {
      var cryptoWidget = crCryptocoinPriceWidget.init({
          base: "USD,EUR,ARS,BRL",
          items: "BTC,ETH,LTC,USDT",

          backgroundColor:"2A2A2A",
          streaming:"1",
          striped:"1",
          rounded:"1",
          boxShadow:"1",
          border:"1"
      });
      document.getElementById("crypto-widget-container").appendChild(cryptoWidget);
  }

  e.readyState
      ? e.onreadystatechange = function () {
          if ("loaded" != e.readyState && "complete" != e.readyState) {
              return;
          }
          e.onreadystatechange = null;
          initializeWidget();
      }
      : e.onload = function () {
          initializeWidget();
      };

  document.body.appendChild(e);
}();


