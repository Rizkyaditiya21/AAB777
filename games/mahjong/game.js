updateBalanceDisplay();

const BET = 500;

function drawReels(reels){

 let container = document.getElementById("reels");
 container.innerHTML = "";

 reels.forEach(reel=>{

  let div = document.createElement("div");
  div.className = "reel";
  div.innerText = reel[1];

  container.appendChild(div);

 });
}



function spin(){

 let balance = parseInt(localStorage.getItem("balance"));

 if(balance < BET){
  alert("Saldo kurang");
  return;
 }

 balance -= BET;
 localStorage.setItem("balance",balance);
 updateBalanceDisplay();


 let reels = spinEngine();

 drawReels(reels);

 let result = checkWin(reels);

 if(result.win > 0){

  balance += result.win;
  localStorage.setItem("balance",balance);

  document.getElementById("result").innerText =
  "MENANG : " + result.win;

  updateBalanceDisplay();
 }


 if(result.freeSpin){
  setTimeout(()=>{

   document.getElementById("result").innerText =
   "FREE SPIN !!!";

   spin();

  },1500);
 }
}
