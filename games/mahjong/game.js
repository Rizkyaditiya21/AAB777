let engine = new SlotEngine(
 ["🐉","🀄","💎","🍀","⭐"]
);

function spin(){

 updateBalance(-10);

 let result = engine.spin();

 show(result);

 let win = checkWin(result);

 if(win>0){
  updateBalance(win);
  resultText.innerText = "WIN "+win;
 }else{
  resultText.innerText = "LOSE";
 }

}

function show(result){

 let reels = document.querySelectorAll(".reel");

 reels.forEach((reel,i)=>{
  reel.innerText = result[i].join("\n");
 });

}

