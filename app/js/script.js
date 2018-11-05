var range = document.querySelector(".range");
var fatCat = document.querySelector(".fat-cat");
range.addEventListener("change", function() {
  var valueNow = this.value;
 /* if(valueNow < 50){
  	valueNow = 0;
  	range.setAttribute("value", 0);
  }else if(valueNow > 600){
  	valueNow = 650;
  	range.setAttribute("value", 650);
  }*/
  fatCat.style.width = valueNow +"px";
});

