class SlotEngine{

 constructor(symbols){
  this.symbols = symbols;
 }

 spin(){

  let reels=[];

  for(let i=0;i<5;i++){

   let reel=[];

   for(let j=0;j<3;j++){
    reel.push(
     this.symbols[
      Math.floor(
       Math.random()*this.symbols.length
      )
     ]
    );
   }

   reels.push(reel);
  }

  return reels;
 }

}
