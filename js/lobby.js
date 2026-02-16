updateBalanceDisplay();

fetch("data/config.json")
.then(res=>res.json())
.then(data=>{

 let container = document.getElementById("gameList");

 container.innerHTML = "";

 data.games.forEach(game=>{

  container.innerHTML += `
   <div class="game-card"
    onclick="openGame('${game.folder}')">

    🎰<br><br>
    ${game.name}

   </div>
  `;

 });

});

function openGame(folder){
 window.location = `games/${folder}/game.html`;
}
