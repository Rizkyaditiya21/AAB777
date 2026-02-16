const symbols = ["🀄","🍒","💎","⭐","🔔","🐉"];

const SCATTER = "🀄";

function randomSymbol(){
 return symbols[Math.floor(Math.random()*symbols.length)];
}


function spinEngine(){

 let reels = [];

 for(let r=0;r<5;r++){

  let reel = [];

  for(let i=0;i<3;i++){
   reel.push(randomSymbol());
  }

  reels.push(reel);
 }

 return reels;
}



function checkWin(reels){

 let win = 0;
 let scatter = 0;

 reels.forEach(r=>{
  r.forEach(sym=>{
   if(sym === SCATTER) scatter++;
  });
 });

 // scatter trigger
 if(scatter >=3){
  return {win:5000, freeSpin:true};
 }

 // simple line win
 let first = reels[0][1];

 let same = reels.every(r => r[1] === first);

 if(same){
  win = 2000;
 }

 return {win, freeSpin:false};
}
