function addUser(){
    player_1= document.getElementById("player 1").value;
    player_2= document.getElementById("player 2").value;

        localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
        window.location.replace("game.html");
}