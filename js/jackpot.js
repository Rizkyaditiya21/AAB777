let jackpot = 800000000;

setInterval(()=>{
 jackpot += Math.floor(Math.random()*5000);

 document.getElementById("jackpot").innerText =
 jackpot.toLocaleString();

},2000);
