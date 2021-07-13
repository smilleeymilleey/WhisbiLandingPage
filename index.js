
function getRates () {
    console.log("its working");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("display").innerHTML =
        this.responseText;
      } 
    };
    xhttp.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=157368e6d162503529ba3a0211a0905f", true);
    xhttp.send();
  }





