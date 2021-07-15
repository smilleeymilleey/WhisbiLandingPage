let currencies = [ "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL" ];



currencies.forEach(element => {
  let option = document.createElement("option")
  option.textContent = element;
  document.getElementById("newCurrency").appendChild(option)
  
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function toggleNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

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
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        document.getElementById("start").innerHTML=startAmount + " Euros =";
        document.getElementById("conversionRate").innerHTML=res.rates[newCurrency] + " " + newCurrency;
        document.getElementById("convertedAmount").innerHTML= newAmount + " " + newCurrency;
        document.getElementById("date").innerHTML= "Last updated " + res.date;
        document.getElementById("time").innerHTML = formattedTime;
     
    } 
      
    



    // inside of the loop for each currency create option element and append child to newcurrencyselect 
      


    };

    // currency converter is not free so find end point that gives conversion rates and manually convert rates for drop down menu items 
    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=04f180122fa4b611c6851b8f7b6774cd&base=" + startCurrency + 
  "&symbols=" + " " + newCurrency);
    xhttp.send();

}
