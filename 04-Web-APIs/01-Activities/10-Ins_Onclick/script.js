var name2 = document.querySelector(".name");

var hiddenPar = document.querySelector(".hiddenP");

var showP = false;

name2.addEventListener("click", function() {
  console.log("Get well soon");

  hiddenPar.setAttribute("class", "showP");

  if(showP){
    showP = false;
    hiddenPar.setAttribute("class", "hiddenP");
  }else{
    showP = true;
    hiddenPar.setAttribute("class", "showP");
  }

});