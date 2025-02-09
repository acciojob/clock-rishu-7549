//your JS code here. If required.
let timerDisplay = document.getElementById("timer");
let current = new Date();

 setInterval( 
	 function(){
		current = new Date();
		timerDisplay.innerHTML = current.toLocaleString();
	 }  , 1000);