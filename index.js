//calling for all the plus buttons:
var plus_buttons = document.querySelectorAll(".plus");
//calling for all the minus buttons:
var minus_buttons = document.querySelectorAll(".minus");
//calling for all like buttons:
var like_buttons = document.querySelectorAll(".like");
//calling for all delete buttons:
var delete_button = document.querySelectorAll(".delete");
//Calling for all the prices:
var prices = document.querySelectorAll(".price");
//calling for all the total:
var total = document.querySelector("#total");

// fonction calcul Somme :
function sum() {
  var somme = 0;
  for (i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML);
  }
  total.innerHTML = somme;
}

// +++++++++++  Debut Fonction button"+" avec son affichage ++++++++++

function inc(e) {
  //------------------- Quantity Calcul ---------------

  var clickedButton = e.target;
  var parentDiv = clickedButton.parentElement;
  var paragraph = parentDiv.querySelector("p");
  var pValue = Number(paragraph.innerHTML);
  pValue++;
  paragraph.innerHTML = pValue;
  //------------------- Price Calcul ------------------
  var tr = parentDiv.parentElement.parentElement;
  var unitPriceTag = tr.querySelector(".unitPrice");
  var unitPriceValue = Number(unitPriceTag.innerHTML);
  var priceTag = tr.querySelector(".price");
  priceTag.innerHTML = unitPriceValue * pValue;
  // Apel du fonction clacule sum "somme":
  sum();
}
// Event Listener "Plus_Button"
for (i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", inc);
}
//+++++++++++++++ fin fonction buttou"+"++++++++++++

//+++++++++++++++ Debut fonction buttou"-"avec son affichage+++++++++
function dec(e) {
  //------------------- Quantity Calcul ---------------
  var clickedButton = e.target;
  var parentDiv = clickedButton.parentElement;
  var paragraph = parentDiv.querySelector("p");
  var pValue = Number(paragraph.innerHTML);
  if (pValue > 0) {
    pValue--;
  }

  paragraph.innerHTML = pValue;
  //------------------- Price Calcul ------------------
  var tr = parentDiv.parentElement.parentElement;
  var unitPriceTag = tr.querySelector(".unitPrice");
  var unitPriceValue = Number(unitPriceTag.innerHTML);
  var priceTag = tr.querySelector(".price");
  priceTag.innerHTML = unitPriceValue * pValue;
  // Apel du fonction clacule sum "somme":
  sum();
}

//Event Listener "Minus_button"
for (i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", dec);
}
//+++++++++++++++ fin fonction buttou"-"++++++++++++
//++++++++++++++++Function ColorChange ++++++++++++++++
function colorChanger(e) {
  var clickedheart = e.target;
  if (clickedheart.style.color !== "red") {
    clickedheart.style.color = "red";
  } else {
    clickedheart.style.color = "#424242";
  }
}
for (let i = 0; i < like_buttons.length; i++) {
  like_buttons[i].addEventListener("click", colorChanger);
}
//+++++++++++function delete"tr" +initialiser Qte et prix++++++++++
function deleteTr(e) {
  clickedBin = e.target;
  var Row = clickedBin.parentElement.parentElement.parentElement.parentElement;
  var priceToReset = Row.querySelector(".price");
  priceToReset.innerHTML = "0";
  sum();
  Row.remove();
}

for (let i = 0; i < delete_button.length; i++) {
  delete_button[i].addEventListener("click", deleteTr);
}

//console.log(paragraph);
