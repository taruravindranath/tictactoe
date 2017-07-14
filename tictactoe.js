window.onload = function(){
	var currentPlayer = 0;
	var firstPlayer = new Set();
	var secondPlayer = new Set();
	var cells = new Array();

	document.getElementById('restart').addEventListener('click', restart);
	for (var i = 1; i < 10; i++) {
		cells.push(document.getElementById(i));
		document.getElementById(i).addEventListener('click', click);
	}
	
	function click(e) {
		if (e.target.innerHTML == 'X' || e.target.innerHTML == 'O') {
			return;
		}

		if (currentPlayer == 0) {
			addSlot('X','25px',firstPlayer, e);
		} else {
			addSlot('O', '25px', secondPlayer, e);
		}

		currentPlayer = (currentPlayer) ? 0 : 1;

		if(allFilled()) {
			setTimeout(function() {
				alert("Game Over!");
				var reset = prompt("Restart? Yes or No");
				if (reset.toLowerCase().trim() === 'yes') {
					alert('Let\'s go!');
					restart();
				}
				else {
					alert("Thank you for Playing!");
				}

			}, 10)
		}
	}

	function restart() {
		for (var i = 0; i < 9; i++) {
			cells[i].innerHTML = ' ';
		}
		firstPlayer.clear();
		secondPlayer.clear();
		currentPlayer = 0;
	}

	function addSlot(slotVal, width, player, cell) {
		cell.target.innerHTML = slotVal;
		cell.target.style.fontSize = width;
		player.add(parseInt(cell.target.id));
	}

	function allFilled() {
		var filled = true;
		document.querySelectorAll('td').forEach(function(cell) {
			if(!cell.innerHTML.trim()) {
				filled = false;
				return;
			}
		});

		return filled;
	}

}
