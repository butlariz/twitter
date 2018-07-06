var btn = document.querySelector('button');
showCount = document.getElementsByClassName("char-count")[0];
 
function countText(value){
	var restChar = 140 - value.length;
	showCount.textContent = restChar + " caracteres restantes"
	if (restChar === 140 || restChar < 0) {
		btn.disabled = true;
  } else {
		btn.disabled = false;
	}
	return false;
}

function tweet() {
	var newTweet = document.getElementById("inputTwitter").value;
	var postTimeline = document.createElement('li');
	postTimeline.textContent = newTweet; 
	var timeline = document.getElementById('timeline');
	timeline.prepend(postTimeline);
	document.getElementById("formTwitter").reset();
	btn.disabled = true;
	showCount.textContent = "140 caracteres restantes"
	return false;
} 