var form = document.getElementById("frequency")

form .addEventListener("submit", function(element){
  element.preventDefault()
    if (document.getElementById("everyOther").checked){
        setTimeout(function(){ alert("You will receive a reminder in 48 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 1.728e+8);
    } else if (document.getElementById("daily").checked) {
        setTimeout(function(){ alert("You will receive a reminder in 24 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 8.64e+7);
    } else if (document.getElementById("twiceDaily").checked){
        setTimeout(function(){ alert("You will receive a reminder in 12 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 4.32e+7);
    } else if (document.getElementById("thriceDaily").checked){
        setTimeout(function(){ alert("You will receive a reminder in 8 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 2.88e+7);
    } else if (document.getElementById("fourDaily").checked){
        setTimeout(function(){ alert("You will receive a reminder in 6 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 2.16e+7);
    } else if (document.getElementById("fourHour").checked){
        setTimeout(function(){ alert("You will receive a reminder in 4 hours!")}, 1000);
        setTimeout(function(){ alert("Time to take your meds!")}, 1.44e+7);
    }
  })
