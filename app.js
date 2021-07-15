// chart begin 

window.onload = function() {
  var dataPoints = [];

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Euro Currency Exchange Rates"
    },
    axisY: {
      title: "Exchange Rates",
      titleFontSize: 24,
      minimum: 0,
      maximum: 1000,
    },
    axisX: {
      title: "Currencies"
    },
    data: [{
      type: "column",
      yValueFormatString: "#,### Rate",
      dataPoints: dataPoints
    }]
  });
  // retrieves data from parse data function, loops through data, and pushes new data to new array and displays parsed data on specified data points 
  window.addData = function(data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      dataPoints.push({
        label: data[i].currency,
        y: data[i].rate
      });
    }
    console.log(dataPoints);
    chart.render();
  }
}
// chart end

let currencies = [ "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL" ];

currencies.forEach(element => {
  let option = document.createElement("option")
  option.textContent = element;
  document.getElementById("newCurrency").appendChild(option)
  
});

// converts api results to the format that the chart library is expecting and sends info to addData function
function parseChartData(data){
  let parsedData = Object.keys(data.rates).map(item => { return {"currency": item, "rate": data.rates[item]} });
  window.addData(parsedData);
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// displays and converts currency conversions 
function getRates() {
  let startSelect= document.getElementById("names")
  let endSelect= document.getElementById("newCurrency")
  let newCurrency = endSelect.options[endSelect.selectedIndex].text;
  let startCurrency= startSelect.options[startSelect.selectedIndex].text;
  let startAmount = document.getElementById("startAmount").value

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let res = JSON.parse(this.responseText)
        let conversionRate = res.rates[newCurrency]
        let newAmount = startAmount*conversionRate
        let unix_timestamp = res.timestamp;
        let date = new Date(unix_timestamp * 1000);
      
        document.getElementById("start").innerHTML=startAmount + " Euros =";
        document.getElementById("conversionRate").innerHTML= "1 EUR = " + res.rates[newCurrency] + " " + newCurrency;
        document.getElementById("convertedAmount").innerHTML= newAmount + " " + newCurrency;
        document.getElementById("date").innerHTML= "Last updated " + date;
     
        parseChartData(res);
    } 
    };

    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=04f180122fa4b611c6851b8f7b6774cd");
    xhttp.send();
}

getRates()