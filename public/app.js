var form = document.getElementById("form1")
var textInput = document.getElementById("textInput")
var textInput2 = document.getElementById("textInput2")
var h2 = document.createElement("h2")
var h3 = document.createElement("h3")

var drugInteract = document.getElementById("contentInt")
var drugSeverity = document.getElementById("contentSev")


form.addEventListener("submit", function(element){
  element.preventDefault()
  document.getElementById("contentInt").innerHTML = ""
  document.getElementById("contentSev").innerHTML = ""

  fetch('https://galvanize-cors-proxy.herokuapp.com/https://api.drugbankplus.com/v1/us/ddi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'b5c76e070944be761259258975342fb5',
      'Cache-Control': 'no-cache'},
    body: JSON.stringify({
       "names": [
         textInput.value,
         textInput2.value
       ]
     })
    })
    .then(function(response){
      return response.json()
        .then(function(drugsInfo){
          console.log(drugsInfo);
          if (drugsInfo.interactions.length === 0){
            h2.innerText = "No interactions!"
            drugInteract.append(h2);
          } else {
            h2.innerText = drugsInfo.interactions["0"].description
            drugInteract.append(h2);
            contentInt.insertAdjacentHTML('afterBegin', "Interaction:");
            h3.innerText = drugsInfo.interactions["0"].severity
            drugSeverity.append(h3);
            contentSev.insertAdjacentHTML('afterBegin', "Severity:");
          }
        })
    })
})
