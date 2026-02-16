updateBalanceDisplay();

let gamesData = [];

fetch("data/config.json")
.then(res=>res.json())
.then(data=>{
 gamesData = data.games;
 showGames("all");
});


function showGames(provider){

 let container = document.getElementById("gameList");
 container.innerHTML = "";

 gamesData.forEach(game=>{

  if(provider === "all" || game.provider === provider){

   container.innerHTML += `
    <div class="game-card"
     onclick="openGame('${game.folder}')">

     🎰 ${game.name}

    </div>
   `;
  }

 });

}


function filterProvider(provider){

 document.querySelectorAll(".providers button")
 .forEach(btn=>btn.classList.remove("active"));

 event.target.classList.add("active");

 showGames(provider);

}


function openGame(folder){
 window.location = `games/${folder}/game.html`;
}
