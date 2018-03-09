var productList = [{company: "mac", price: 2000, available: false},
                   {company: "iphone", price: 1000, available:true},
                   {company: "asus", price: 1200, available:true}];

var input   = document.getElementById('input');
var btn     = document.getElementById('btn');
var product = document.getElementById('product');

function exist(){

  var productAvailable = '<h2 id="available"> Product is available </h2>';
  var productNotAvailabale = '<h2 id="not-available"> Sorry This product is not available </h2>';

  function innerHtml(x){
    product.innerHTML = '<h1>'+ productList[i]["company"] + '</h1>'+
                        '<h2> Price : $'+ productList[i]["price"] + '</h2>'+ x ;
    input.value="";
  };
  for(var i= 0; i< productList.length; i++){
     if(input.value === productList[i]["company"]){
       productList[i]["available"]? innerHtml(productAvailable) : innerHtml(productNotAvailabale);
       return true;
     }
  }
  return false;
};

function innerHtml(){
  product.innerHTML = '<h2 id="not-available"> There is no such product </h2>';
  input.value="";
};

btn.addEventListener("click",function(){

   exist()? exist(): innerHtml();

});

input.addEventListener("keydown", function() {
    if (event.keyCode === 13) {
       btn.click();
    }
});
