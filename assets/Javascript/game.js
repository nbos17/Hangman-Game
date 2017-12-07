//Javascript 

    //write to HTML divs
    var words = document.getElementById("word");
    var letterTyped = document.getElementById("lettersGuessed");
    var score = document.getElementById("Lives");
    var loser = document.getElementById("loss");
    var winner = document.getElementById("win");
    var youWin = document.getElementById("imageEnd");


    //declare variables
    var blank = [];
    var incorrect = [];
    var lives = 10;
    score.innerHTML = lives;
    var correctGuesses = 0;
	var userGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
	var wordList= ["laptop", "javascript", "minnesota", "iowa", ];
	var wins = 0;
	var losses = 0;
	var computerChoice = [];
	
	//wins function
	function winGame() {
		if (correctGuesses >= computerChoice.length) {
			wins++;
			winner.innerHTML = wins;
			var x = document.createElement("IMG");
			x.setAttribute("src", "assets/Images/winner.jpg");
			x.setAttribute("id", "winningImage");
			x.setAttribute("width", "500px");
			x.setAttribute("height", "200px");
			youWin.appendChild(x);
			reset();		
		}
	}

	//lose Game function
	function loseGame() {
		if (lives <= 0) {
			lives = 10;
			score.innerHTML = lives;
			losses++;
			loser.innerHTML = losses;
			var y = document.createElement("IMG");
			y.setAttribute("src", "assets/Images/loser.jpg");
			y.setAttribute("id", "losingImage");
			y.setAttribute("wideth", "500px");
			y.setAttribute("height", "200px");
			youWin.append(y);
			reset();
		}
	}

	//reset function
	function reset() {
		computerChoice.length = 0;
		lives = 10;
		score.innerHTML = lives;
		incorrect = [];
		blank.length = 0;
		word.innerHTML = " ";
		letterTyped.innerHTML = incorrect;
		correctGuesses = 0;
		newWord();
	}

	// Generate New Word Function
	function newWord() {
	var rand = wordList[Math.floor(Math.random() * wordList.length)];
			computerChoice = rand.split("");
	    	for (i = 0; i < computerChoice.length; i++ ) {
	    		blank.push("  ___  ");
	    		words.innerHTML = blank.join(' ');
	    	} 
	} 
	

	newWord();
	document.onkeyup = function(event) {
		var guess = event.key; 
		while (youWin.firstChild) {
			youWin.removeChild(youWin.firstChild);
		}
		if (userGuess.indexOf(guess) > -1 ) {
			if ((incorrect.indexOf(guess) > -1) || (blank.indexOf(guess) > -1)) {
				console.log("You already guessed that");
			}
			else {
				incorrect.push(guess);
				letterTyped.innerHTML = incorrect;
				if (computerChoice.indexOf(guess) > -1 ) {
					for (var j = 0; j < computerChoice.length; j++) {
						if (computerChoice[j] === guess) {
							blank [j] = guess;
							words.innerHTML = blank.join(' ');
							correctGuesses++;
							winGame();
						}				
					}
				}

				else {
					lives--;
					score.innerHTML = lives;
					loseGame();
				}
			}
		}
		else {
			alert("Invalid Guess");
		}
		
	}