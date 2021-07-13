function getRates () {
    console.log("its working");
  }
  
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("click", getRates);
  oReq.open("GET", "http://api.exchangeratesapi.io/v1/KEY/convert");
  oReq.send();