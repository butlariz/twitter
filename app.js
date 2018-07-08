// Variáveis e dados globais 
var newTweet = document.getElementById("textTwitter");
var btn = document.querySelector('#btnTweet');
btn.addEventListener("click", tweet);
var showCount = document.getElementsByClassName("char-count")[0];
 
function countText(value){
	// Contar a quantidade de caracteres
	var restChar = 140 - value.trim().length;
	showCount.textContent = restChar + " caracteres restantes"
	// Desativar ou ativar o botão
	if (restChar < 0 || restChar === 140){
		btn.disabled = true;	
	} else {
		btn.disabled = false;
	}
	// Trocar a cor do contador
	if (restChar > 20){
		showCount.setAttribute("style", "color:#6ad2f3");
	}
	if (restChar < 20){
		showCount.setAttribute("style", "color:#d8d500");
	} 
	if (restChar < 10){
		showCount.setAttribute("style", "color:#f77009");
	}
	if (restChar < 0){
		showCount.setAttribute("style", "color:#e81414");
	}
	//Resize TextArea
	if (newTweet.scrollHeight > 70) {
		if (newTweet.offsetHeight < newTweet.scrollHeight){
			olderRows = parseInt(newTweet.getAttribute("rows"));
			newTweet.setAttribute("rows", olderRows + 1);
			newTweet.setAttribute("style", "height:" + newTweet.scrollHeight +"px");
		} 		
		if (newTweet.offsetHeight > newTweet.scrollHeight){
			olderRows = parseInt(newTweet.getAttribute("rows"));
			newTweet.setAttribute("rows", olderRows - 1);
			newTweet.setAttribute("style", "height:" + newTweet.scrollHeight +"px");
		}
}
	if (newTweet.value.length === 0) {
		newTweet.setAttribute("rows", 2);
		newTweet.setAttribute("style", "height: 70px");
	}
	return false;
}

function tweet() {
	event.preventDefault();
	// Pegar o texto e mostrar na timeline
	var postTimeline = document.createElement('li');
	// Chamar perfil e hora
	var infoTweet = [document.querySelector("#profile").innerHTML,showTime()];
	postTimeline.innerHTML = "<span class='info-tweet'>" + infoTweet[0] + " • " + infoTweet[1] + "</span>" + newTweet.value; 
	var timeline = document.getElementById('timeline');
	timeline.prepend(postTimeline);
	resetTweet();
	return false;
} 

function resetTweet(){
	// Resetar formulário, desativar o botão, e resetar o contador
	document.getElementById("formTwitter").reset();
	newTweet.setAttribute("rows", 2);
	btn.disabled = true;
	showCount.textContent = "140 caracteres restantes";
	return false;
}

function showTime() {
	// Mostrar a hora do tweet
	theHour = new Date().getHours();
	theMinutes = new Date().getMinutes();
	resultTime = "<span class='time'>" + theHour + ((theMinutes < 10) ? ":0" : ":") + theMinutes + "</span>";
	return resultTime;
}