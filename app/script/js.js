var range = document.querySelector(".range");
var fatCat = document.querySelector(".fat-cat");
var slimCat = document.querySelector(".slim-cat");
range.addEventListener("change", function() {
  var valueNow = this.value;
 if(valueNow < 350){
  	valueNow = 0;
  	slimCat.style = "z-index:0";
    fatCat.style.width = 600 + "px";
  	range.setAttribute("value", 0);
  }else if(valueNow > 350){
  	valueNow = 650;
  	range.setAttribute("value", 650);
  	slimCat.style = "z-index:1";
    fatCat.style.width = 0 + "px";
  }
  console.log(valueNow)
});
