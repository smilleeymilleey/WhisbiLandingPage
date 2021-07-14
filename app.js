
// determine rates 

// let startCurrency = startSelect.options[startSelect.selectedIndex].value
document.getElementById("convertButton").onclick =getRates();



function getRates () {
  let startSelect= document.getElementById("names")
  let currency= startSelect.options[startSelect.selectedIndex].text;
  console.log(currency)
    console.log("its working");
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("display").innerHTML =
        this.responseText;
      } 
    };

    // currency converter is not free so find end point that gives conversion rates and manually convert rates for drop down menu items 
    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=04f180122fa4b611c6851b8f7b6774cd&base=" + currency);
    xhttp.send();

}
