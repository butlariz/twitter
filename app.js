var btn = document.querySelector('button');

function tweet() {
	var newTweet = document.getElementById("inputTwitter").value;
	var postTimeline = document.createElement('li');
	postTimeline.textContent = newTweet; 
	var timeline = document.getElementById('timeline');
	timeline.prepend(postTimeline);
}

btn.addEventListener('click', tweet);