function updateBalanceDisplay(){

 let balance = localStorage.getItem("balance");

 if(!balance){
  balance = 10000;
  localStorage.setItem("balance", balance);
 }

 let el = document.getElementById("balance");

 if(el){
  el.innerText = "Saldo : " + balance;
 }

}
