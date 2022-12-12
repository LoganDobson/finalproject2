var button = document.getElementById("my-button");
var button2 = document.getElementById("my-button2");
var button3 = document.getElementById("my-button3");


button.addEventListener("click", function() {
  
  alert("this item has been added to your cart");
});

button2.addEventListener("click", function() {
    
    alert("this item has been added to your cart");
  });

  button3.addEventListener("click", function() {
    
    alert("this item has been added to cart");
  });


button.addEventListener("mouseover", function() {

  this.style.cursor = "pointer";
});

button.addEventListener("mouseover", function() {
    
    this.style.cursor = "pointer";
  });

  button2.addEventListener("mouseover", function() {
   
    this.style.cursor = "pointer";
  });

  button3.addEventListener("mouseover", function() {
    
    this.style.cursor = "pointer";
  });