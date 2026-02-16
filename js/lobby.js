window.onload = function(){

 if(typeof updateBalanceDisplay === "function"){
  updateBalanceDisplay();
 }

 fetch("./data/config.json")
 .then(res=>res.json())
 .then(data=>{

  let container = document.getElementById("gameList");

  container.innerHTML = "";

  data.games.forEach(game=>{

   container.innerHTML += `
    <div class="game-card"
     onclick="openGame('${game.folder}')">

     🎰 ${game.name}

    </div>
   `;
  });

 })
 .catch(err=>{
  console.log("Config error:", err);
 });

}

function openGame(folder){
 window.location.href = `./games/${folder}/game.html`;
}
