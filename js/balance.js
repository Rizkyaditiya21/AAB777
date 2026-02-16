function updateBalanceDisplay(){

 let balance = localStorage.getItem("balance");

 if(!balance){
  balance = 10000;
  localStorage.setItem("balance", balance);
 }

 document.getElementById("balance").innerText = "Saldo : " + balance;

}
