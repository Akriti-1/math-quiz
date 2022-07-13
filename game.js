document. getElementById("p"). style. display = 'none';
document.getElementById("l").innerHTML= "Answer:";
	player1_name = localStorage.getItem("player_1");
	player2_name = localStorage.getItem("player_2");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
count= 1;

function Delete(){
	localStorage.setItem("player_1", "");
	localStorage.setItem("player_2", "");
	window.location.replace("index.html");
}

function Send(){
	document.getElementById("l").innerHTML= "Answer:";
	number1= document.getElementById("n1").value;
	number_1= parseInt(number1);
	number2= document.getElementById("n2").value;
	number_2= parseInt(number2);
	document.getElementById("input"). style. display = 'none';
	op= Math.floor(Math.random() * 4);
	console.log(op);
	if(op==0){
		document.getElementById("question").innerHTML= number_1 + " + " + number_2;
	}
	if(op==1){
		document.getElementById("question").innerHTML= number_1 + " - " + number_2;
	}
	if(op==2){
		document.getElementById("question").innerHTML= number_1 + " X " + number_2;
	}
	if(op==3){
		document.getElementById("question").innerHTML= number_1 + " ÷ " + number_2;
	}
}

function check(){
	answer= 0;
	if(op==0){
		answer=number_1+number_2;
		console.log(answer);
	}
	if(op==1){
		answer=number_1-number_2;
		console.log(answer);
	}
	if(op==2){
		answer=number_1*number_2;
		console.log(answer);
	}
	if(op==3){
		answer=number_1/number_2;
		console.log(answer);
	}
	answer2= document.getElementById("answer").value;
	console.log(answer2);
	if(answer2==answer){
		if (count==1){
			player1_score=player1_score+1; 
			document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
count=2;
document.getElementById("input"). style. display = 'block';
document.getElementById("l").innerHTML= "Correct";
		}
		else{
			player2_score=player2_score+1; 
			document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
count=1;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
document.getElementById("input"). style. display = 'block';
document.getElementById("l").innerHTML= "Correct";
		}
	}
	else{
		if (count==1){
			player1_score=player1_score+1; 
			document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
count=2;

document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
document.getElementById("l").innerHTML= "Incorrect. The answer is " + answer;
document.getElementById("input"). style. display = 'block';
		}
		else{
			player2_score=player2_score+1; 
			document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
count=1;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
document.getElementById("l").innerHTML= "View Answer";
document.getElementById("l").innerHTML= "The answer is " + answer;
document.getElementById("input"). style. display = 'block';
		}
	}
}

