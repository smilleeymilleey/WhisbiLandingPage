
// determine rates 


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
        document.getElementById("date").innerHTML= res.date;
        document.getElementById("time").innerHTML = formattedTime;
    } 
      
      


    };

    // currency converter is not free so find end point that gives conversion rates and manually convert rates for drop down menu items 
    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=04f180122fa4b611c6851b8f7b6774cd&base=" + startCurrency + 
  "&symbols=" + " " + newCurrency);
    xhttp.send();

}
