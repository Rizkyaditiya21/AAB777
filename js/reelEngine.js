const symbols = ["🀄","🍒","💎","⭐","🔔","🐉"];

function getRandomSymbol(){
 return symbols[Math.floor(Math.random()*symbols.length)];
}

function spinReels(){

 updateBalanceDisplay();

 let reels = [];

 for(let i=1; i<=5; i++){
  let reel = document.getElementById("reel" + i);
  reel.classList.add("spin-animation");
  reel.innerText = getRandomSymbol();
 }

 setTimeout(()=>{
  document.querySelectorAll(".reel").forEach(r=> r.classList.remove("spin-animation"));
 }, 600);

}
