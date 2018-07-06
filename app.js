var btn = document.querySelector('button');
showCount = document.getElementsByClassName("char-count")[0];
 
function countText(value){
	// Contar a quantidade de caracteres
	var restChar = 140 - value.length;
	showCount.textContent = restChar + " caracteres restantes"
	// Desativar ou ativar o botão
	if (restChar < 0 || restChar > 140){
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
	return false;
}

function tweet() {
	// Pegar o texto e mostrar na timeline
	var newTweet = document.getElementById("inputTwitter").value;
	var postTimeline = document.createElement('li');
	postTimeline.textContent = newTweet; 
	var timeline = document.getElementById('timeline');
	timeline.prepend(postTimeline);
	resetTweet();
	return false;
} 

function resetTweet(){
	// Resetar formulário, desativar o botão, e resetar o contador
	document.getElementById("formTwitter").reset();
	btn.disabled = true;
	showCount.textContent = "140 caracteres restantes";
	return false;
}