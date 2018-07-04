var btn = document.querySelector('button');

function countText(valor){
	var sizeText = valor.length;
	if (sizeText === 0 || sizeText > 140) {
		btn.removeEventListener('click', tweet);
	} else {
		btn.addEventListener('click', tweet);
		btn.setAttribute('style','cursor:pointer');
	}
	return false;
}

function tweet() {
	var newTweet = document.getElementById("inputTwitter").value;
	var postTimeline = document.createElement('li');
	postTimeline.textContent = newTweet; 
	var timeline = document.getElementById('timeline');
	timeline.prepend(postTimeline);
}

