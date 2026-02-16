const PNG_SYMBOLS = [
  "assets/images/sym_cherry.png",
  "assets/images/sym_bell.png",
  "assets/images/sym_dragon.png",
  "assets/images/sym_star.png",
  "assets/images/sym_scatter.png"
];

function getRandomSymbol() {
  return PNG_SYMBOLS[Math.floor(Math.random() * PNG_SYMBOLS.length)];
}

function spinReels() {
  for(let i=1; i<=5; i++){
    let reel = document.getElementById("reel" + i);
    reel.innerHTML = "";

    let pos = 0;
    let spinInterval = setInterval(() => {
      pos++;
      let img = document.createElement("img");
      img.src = getRandomSymbol();
      img.style.transform = `translateY(${pos * 10}px)`;
      reel.appendChild(img);

      if(pos > 10) {
        clearInterval(spinInterval);
        reel.innerHTML = `<img src="${getRandomSymbol()}">`;
      }
    }, 50);
  }
}
