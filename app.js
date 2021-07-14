
// determine rates 


function getRates () {
  let startSelect= document.getElementById("names")
  let endSelect= document.getElementById("newCurrency")
  let newCurrency = endSelect.options[endSelect.selectedIndex].text;
  let startCurrency= startSelect.options[startSelect.selectedIndex].text;
  let startAmount = document.getElementById("startAmount").value

  console.log(startCurrency, newCurrency)
    console.log("its working");
    console.log(startAmount)
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let res = JSON.parse(this.responseText)
        let conversionRate = res.rates[newCurrency]
        let newAmount = startAmount*conversionRate 
        
        document.getElementById("exchangeRate").innerHTML=res.rates[newCurrency]
        document.getElementById("convertedAmount").innerHTML=newAmount;


        
        console.log(newAmount)
      } 
      
      // manually calculate exchange rates 

   
       

   

    };

    // currency converter is not free so find end point that gives conversion rates and manually convert rates for drop down menu items 
    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=04f180122fa4b611c6851b8f7b6774cd&base=" + startCurrency + 
  "&symbols=" + newCurrency);
    xhttp.send();

}
