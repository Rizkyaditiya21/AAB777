function checkWin(result){

 let win = 0;

 result.forEach(reel=>{
  if(reel[0]===reel[1] && reel[1]===reel[2]){
   win += 50;
  }
 });

 return win;
}

