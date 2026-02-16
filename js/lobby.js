updateBalanceDisplay();

fetch("./data/config.json")
.then(res=>{
 if(!res.ok){
  throw new Error("Config gagal load");
 }
 return res.json();
})
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
 console.error(err);
 document.getElementById("gameList").innerHTML =
 "<p style='color:red'>Game gagal dimuat</p>";
});

function openGame(folder){
 window.location.href = `./games/${folder}/game.html`;
}
